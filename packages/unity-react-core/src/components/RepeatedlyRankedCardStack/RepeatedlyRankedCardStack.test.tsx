// RepeatedlyRankedCardStack.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import { RepeatedlyRankedCardStack } from "./RepeatedlyRankedCardStack";
import type { CardData } from "./types";

const mockCards: CardData[] = [
  { value: "#1", title: "Innovation" },
  { value: "#2", title: "Sustainability" },
  { value: "#3", title: "Global Impact" },
  { value: "#4", title: "Employability" },
  { value: "#5", title: "Accessibility" },
];

describe("RepeatedlyRankedCardStack", () => {
  beforeEach(() => {
    // Mock window.matchMedia for reduced motion tests
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correct number of cards", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} />);
    const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
    expect(cards).toHaveLength(5);
  });

  it("centers middle card by default", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} />);
    const activeCard = screen.getByRole("button", { pressed: true });
    expect(activeCard).toHaveTextContent("Global Impact");
  });

  it("click sets active card", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} />);
    const firstCard = screen.getByRole("button", { name: /Innovation/i });
    fireEvent.click(firstCard);
    expect(firstCard).toHaveAttribute("aria-pressed", "true");
  });

  it("left arrow decrements activeIndex", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} initialActiveIndex={2} />);
    const stack = screen.getByRole("group", { name: /ranking cards/i });
    fireEvent.keyDown(stack, { key: "ArrowLeft" });
    const sustainabilityCard = screen.getByRole("button", { name: /Sustainability/i });
    expect(sustainabilityCard).toHaveAttribute("aria-pressed", "true");
  });

  it("right arrow increments activeIndex", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} initialActiveIndex={2} />);
    const stack = screen.getByRole("group", { name: /ranking cards/i });
    fireEvent.keyDown(stack, { key: "ArrowRight" });
    const employabilityCard = screen.getByRole("button", { name: /Employability/i });
    expect(employabilityCard).toHaveAttribute("aria-pressed", "true");
  });

  it("boundary: left arrow at first card is no-op", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} initialActiveIndex={0} />);
    const stack = screen.getByRole("group", { name: /ranking cards/i });
    fireEvent.keyDown(stack, { key: "ArrowLeft" });
    const innovationCard = screen.getByRole("button", { name: /Innovation/i });
    expect(innovationCard).toHaveAttribute("aria-pressed", "true");
  });

  it("nav arrows disabled at boundaries", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} initialActiveIndex={0} />);
    const prevBtn = screen.getByRole("button", { name: /Previous card/i });
    expect(prevBtn).toBeDisabled();
  });

  it("empty cards array shows fallback", () => {
    render(<RepeatedlyRankedCardStack cards={[]} />);
    expect(screen.getByText("No rankings available.")).toBeInTheDocument();
  });

  it("screen reader live region announces position", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} />);
    const liveRegion = screen.getByRole("status");
    expect(liveRegion).toHaveTextContent(/Showing card 3 of 5/i);
  });

  it("truncates cards array to max 7", () => {
    const manyCards = Array.from({ length: 10 }, (_, i) => ({
      value: `#${i + 1}`,
      title: `Card ${i + 1}`,
    }));
    render(<RepeatedlyRankedCardStack cards={manyCards} />);
    const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
    expect(cards).toHaveLength(7);
  });

  it("renders title when provided", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <RepeatedlyRankedCardStack
        cards={mockCards}
        description="Test description"
      />
    );
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders CTA button when text and URL provided", () => {
    render(
      <RepeatedlyRankedCardStack
        cards={mockCards}
        ctaText="Learn More"
        ctaUrl="/rankings"
      />
    );
    const cta = screen.getByRole("link", { name: /Learn More/i });
    expect(cta).toHaveAttribute("href", "/rankings");
  });

  it("does not render CTA when text or URL missing", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} ctaText="Learn More" />);
    expect(screen.queryByRole("link", { name: /Learn More/i })).not.toBeInTheDocument();
  });

  it("renders with fewer than 3 cards without errors", () => {
    const twoCards = mockCards.slice(0, 2);
    render(<RepeatedlyRankedCardStack cards={twoCards} />);
    const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
    expect(cards).toHaveLength(2);
  });

  it("navigation arrows trigger state changes", () => {
    render(<RepeatedlyRankedCardStack cards={mockCards} initialActiveIndex={2} />);
    const prevBtn = screen.getByRole("button", { name: /Previous card/i });
    const nextBtn = screen.getByRole("button", { name: /Next card/i });

    fireEvent.click(nextBtn);
    const employabilityCard = screen.getByRole("button", { name: /Employability/i });
    expect(employabilityCard).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(prevBtn);
    const globalImpactCard = screen.getByRole("button", { name: /Global Impact/i });
    expect(globalImpactCard).toHaveAttribute("aria-pressed", "true");
  });

  // === Edge Case Tests: Card Count Validation ===

  describe("Card count edge cases", () => {
    it("handles exactly 0 cards with fallback message", () => {
      render(<RepeatedlyRankedCardStack cards={[]} />);
      expect(screen.getByText("No rankings available.")).toBeInTheDocument();
      expect(screen.queryByRole("group", { name: /ranking cards/i })).not.toBeInTheDocument();
    });

    it("handles exactly 1 card (below minimum)", () => {
      const oneCard = [{ value: "#1", title: "Solo Card" }];
      render(<RepeatedlyRankedCardStack cards={oneCard} />);

      const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
      expect(cards).toHaveLength(1);

      // Navigation arrows should not be present for < 3 cards
      expect(screen.queryByRole("button", { name: /Previous card/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /Next card/i })).not.toBeInTheDocument();
    });

    it("handles exactly 2 cards (below minimum)", () => {
      const twoCards = [
        { value: "#1", title: "First Card" },
        { value: "#2", title: "Second Card" },
      ];
      render(<RepeatedlyRankedCardStack cards={twoCards} />);

      const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
      expect(cards).toHaveLength(2);

      // Navigation arrows should not be present for < 3 cards
      expect(screen.queryByRole("button", { name: /Previous card/i })).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /Next card/i })).not.toBeInTheDocument();
    });

    it("handles exactly 8 cards (truncates to 7)", () => {
      const eightCards = Array.from({ length: 8 }, (_, i) => ({
        value: `#${i + 1}`,
        title: `Card ${i + 1}`,
      }));
      render(<RepeatedlyRankedCardStack cards={eightCards} />);

      const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
      expect(cards).toHaveLength(7); // Should truncate to 7

      const liveRegion = screen.getByRole("status");
      expect(liveRegion).toHaveTextContent(/of 7/i); // Confirms totalCards is 7
    });

    it("handles 10+ cards (truncates to 7 max)", () => {
      const manyCards = Array.from({ length: 15 }, (_, i) => ({
        value: `#${i + 1}`,
        title: `Card ${i + 1}`,
      }));
      render(<RepeatedlyRankedCardStack cards={manyCards} />);

      const cards = screen.getAllByRole("button", { name: /Card \d of \d/i });
      expect(cards).toHaveLength(7); // Max 7 cards
    });
  });
});
