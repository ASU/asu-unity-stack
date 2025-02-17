import { render, cleanup, RenderResult, screen } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import {
  PersonProfile,
  SocialMediaPlatform,
  PersonProfileProps,
} from "./PersonProfile";

const defaultProps: PersonProfileProps = {
  name: "John Smith",
  profession: {
    title: "Regents Professor",
    department: "Edplus at ASU",
  },
  contactInfo: {
    email: "email@asu.edu",
    phone: "555-555-5555",
    address: {
      street: "1234 Address St.",
      cityStateZip: "Tempe AZ 12345",
    },
  },
  description: "Test description",
  socialMedia: [
    {
      platform: SocialMediaPlatform.LinkedIn,
      url: "https://example.com",
    },
  ],
  imageUrl: "/test-image.jpg",
};

const renderComponent = (props: PersonProfileProps = defaultProps) => {
  return render(<PersonProfile {...props} />);
};

describe("PersonProfile tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent();
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render the name correctly", () => {
    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });

  it("should render professional information", () => {
    expect(screen.getByText("Regents Professor")).toBeInTheDocument();
    expect(screen.getByText("Edplus at ASU")).toBeInTheDocument();
  });

  it("should render contact information", () => {
    expect(screen.getByText("email@asu.edu")).toBeInTheDocument();
    expect(screen.getByText("555-555-5555")).toBeInTheDocument();
    expect(screen.getByText("1234 Address St.")).toBeInTheDocument();
    expect(screen.getByText("Tempe AZ 12345")).toBeInTheDocument();
  });

  it("should render description", () => {
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("should render profile image with correct attributes", () => {
    const img = screen.getByAltText("John Smith") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("/test-image.jpg");
    expect(img.width).toBe(300);
    expect(img.height).toBe(300);
  });

  it("should render social media links", () => {
    const socialLink = screen.getByLabelText("Go to user linkedin profile");
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute("href", "https://example.com");
  });

  describe("accessibility tests", () => {
    it("should have proper aria labels for contact links", () => {
      expect(screen.getByLabelText("Email user")).toBeInTheDocument();
      expect(screen.getByLabelText("Call user")).toBeInTheDocument();
    });

    it("should use semantic HTML elements", () => {
      expect(component.container.querySelector("address")).toBeInTheDocument();
      expect(component.container.querySelector("h3")).toBeInTheDocument();
      expect(component.container.querySelector("h4")).toBeInTheDocument();
    });
  });

});
