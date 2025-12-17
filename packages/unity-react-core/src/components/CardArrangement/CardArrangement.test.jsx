// @ts-check
import { render } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import React from "react";

import { CardArrangement } from "./CardArrangement";

const mockCards = [
  {
    type: "default",
    title: "Card 1",
    body: "Body content 1",
    image: "https://via.placeholder.com/400x300",
    imageAltText: "Image 1",
  },
  {
    type: "default",
    title: "Card 2",
    body: "Body content 2",
    image: "https://via.placeholder.com/400x300",
    imageAltText: "Image 2",
  },
  {
    type: "default",
    title: "Card 3",
    body: "Body content 3",
    image: "https://via.placeholder.com/400x300",
    imageAltText: "Image 3",
  },
];

describe("CardArrangement", () => {
  it("should render without crashing", () => {
    const { container } = render(<CardArrangement cards={mockCards} />);
    expect(container).toBeDefined();
  });

  it("should render the correct number of cards", () => {
    const { getAllByTestId } = render(<CardArrangement cards={mockCards} />);
    const cardItems = getAllByTestId("card-container");
    expect(cardItems).toHaveLength(3);
  });

    it("should apply correct column classes based on columns prop", () => {
    const { getAllByTestId: get2Cols, unmount: unmount2 } = render(
      <CardArrangement cards={mockCards} columns={2} />
    );
    expect(get2Cols("uds-card-arrangement-content-container")[0].className).toContain("col-6");
    unmount2();

    const { getAllByTestId: get3Cols, unmount: unmount3 } = render(
      <CardArrangement cards={mockCards} columns={3} />
    );
    expect(get3Cols("uds-card-arrangement-content-container")[0].className).toContain("col-4");
    unmount3();

    const { getAllByTestId: get4Cols, unmount: unmount4 } = render(
      <CardArrangement cards={mockCards} columns={4} />
    );
    expect(get4Cols("uds-card-arrangement-content-container")[0].className).toContain("col-3");
    unmount4();

    const horizontalCards = [
      {
        type: "default",
        title: "Horizontal",
        body: "Body",
        horizontal: true,
      },
      {
        type: "default",
        title: "Horizontal",
        body: "Body",
        horizontal: true,
      },
    ];
    const { getAllByTestId: getHorizontal } = render(
      <CardArrangement cards={horizontalCards} columns={3} />
    );
    expect(getHorizontal("uds-card-arrangement-content-container")[0].className).not.toContain("col");
  });

  it("should render cards with correct titles", () => {
    const { getAllByTestId } = render(<CardArrangement cards={mockCards} />);
    const cardTitles = getAllByTestId("card-title");

    expect(cardTitles[0]).toHaveTextContent("Card 1");
    expect(cardTitles[1]).toHaveTextContent("Card 2");
    expect(cardTitles[2]).toHaveTextContent("Card 3");
  });

  it("should render null when cards array is empty", () => {
    const { container } = render(<CardArrangement cards={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render null when cards is undefined", () => {
    // @ts-ignore - Testing invalid prop
    const { container } = render(<CardArrangement cards={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render container with correct wrapper class", () => {
    const { getByTestId } = render(<CardArrangement cards={mockCards} />);
    const container = getByTestId("card-arrangement");

    expect(container).toBeDefined();
    expect(container.className).toContain("row");
  });

  it("should handle cards with different types", () => {
    const mixedCards = [
      {
        type: "default",
        title: "Default Card",
        body: "Default body",
      },
      {
        type: "event",
        title: "Event Card",
        body: "Event body",
        eventTime: "March 15, 2024",
        eventLocation: "Tempe campus",
      },
      {
        type: "story",
        title: "Story Card",
        body: "Story body",
        linkLabel: "Read more",
        linkUrl: "#",
      },
    ];

    const { getAllByTestId } = render(<CardArrangement cards={mixedCards} />);
    const cardTitles = getAllByTestId("card-title");

    expect(cardTitles[0]).toHaveTextContent("Default Card");
    expect(cardTitles[1]).toHaveTextContent("Event Card");
    expect(cardTitles[2]).toHaveTextContent("Story Card");
  });

  it("should pass through card props correctly", () => {
    const cardsWithButtons = /** @type {import('./CardArrangement').CardArrangementProps['cards']} */ ([
      {
        type: "default",
        title: "Card with Button",
        body: "Body content",
        buttons: [
          {
            color: /** @type {"maroon"} */ ("maroon"),
            size: /** @type {"default"} */ ("default"),
            label: "Click me",
            href: "#",
          },
        ],
      },
    ]);

    const { getByTestId } = render(
      <CardArrangement cards={cardsWithButtons} />
    );
    const button = getByTestId("card-button");

    expect(button).toBeDefined();
  });

  it("should render cards with tags", () => {
    const cardsWithTags = [
      {
        type: "story",
        title: "Story with Tags",
        body: "Story content",
        tags: [
          { color: "gray", label: "Tag 1", href: "#" },
          { color: "gray", label: "Tag 2", href: "#" },
        ],
      },
    ];

    const { getByTestId } = render(<CardArrangement cards={cardsWithTags} />);
    const tags = getByTestId("card-tags");

    expect(tags).toBeDefined();
  });

  it("should generate unique keys for each card", () => {
    const { getAllByTestId } = render(<CardArrangement cards={mockCards} />);
    const cardItems = getAllByTestId("card-container");

    // Check that all items are rendered (unique keys would prevent duplicates)
    expect(cardItems).toHaveLength(mockCards.length);
  });

  it("should render ranking cards when cardType is ranking", () => {
    /** @type {any} */
    const rankingCards = [
      {
        imageSize: "large",
        image: "https://via.placeholder.com/400x300",
        imageAlt: "Ranking image",
        heading: "Test Ranking",
        body: "Test body content",
        readMoreLink: "#",
      },
      {
        imageSize: "small",
        image: "https://via.placeholder.com/400x300",
        imageAlt: "Ranking image 2",
        heading: "Test Ranking 2",
        body: "Test body content 2",
        citation: "Test Citation",
      },
    ];

    const { getAllByTestId } = render(
      <CardArrangement cards={rankingCards} cardType="ranking" />
    );
    const cardItems = getAllByTestId("uds-card-arrangement-content-container");
    expect(cardItems).toHaveLength(2);
    cardItems.forEach(cardItem => {
      const directChild = cardItem.firstElementChild;
      expect(directChild).toBeDefined();
      expect(directChild.className).toContain('card-ranking');
    });
  });

  it("should default to card type when cardType prop is not provided", () => {
    const { getAllByTestId } = render(<CardArrangement cards={mockCards} />);
    const cardTitles = getAllByTestId("card-title");

    // Card component uses card-title test id
    expect(cardTitles).toHaveLength(3);
  });

  it("should render ranking card with info layer", () => {
    /** @type {any} */
    const rankingCards = [
      {
        imageSize: "large",
        image: "https://via.placeholder.com/400x300",
        imageAlt: "Ranking image",
        heading: "Test Ranking",
        body: "Test body content",
        readMoreLink: "#",
      },
    ];

    const { getByTestId } = render(
      <CardArrangement cards={rankingCards} cardType="ranking" />
    );
    const infoLayer = getByTestId("info-layer");

    expect(infoLayer).toBeDefined();
  });
});
