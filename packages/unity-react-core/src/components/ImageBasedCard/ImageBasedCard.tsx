import React from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

export type CardOrientation = "portrait" | "landscape" | "square";
export type CardSize = "sm" | "md" | "lg";

export interface ImageBasedCardProps {
  orientation: CardOrientation;
  size: CardSize;
  image: string;
  title: string;
  buttonText: string;
  buttonHref?: string;
  gaSection?: string;
}

const defaultGaProps = {
  name: "onclick",
  event: "link",
  type: "internal link (external if referring to non asu.edu site)",
  region: "main content",
};

export const ImageBasedCard: React.FC<ImageBasedCardProps> = ({
  orientation,
  size,
  image,
  title,
  buttonText,
  buttonHref,
  gaSection,
}) => {
  const getButtonSize = (
    orientation: CardOrientation,
    size: CardSize
  ): string => {
    if (
      (orientation === "landscape" && size === "sm") ||
      (orientation === "landscape" && size === "md") ||
      (orientation === "square" && size === "sm")
    ) {
      return "btn-sm";
    }
    return "btn-md";
  };

  return (
    <div className={`uds-image-based-card ${orientation}-${size}`}>
      <img src={image} alt="Card image cap" loading="lazy" decoding="async" />
      <div className="card-img-overlay">
        <h2 className="card-title text-white">{title}</h2>
        <GaEventWrapper gaData={{ ...defaultGaProps, section: gaSection }}>
        <a
          href={buttonHref}
          className={`btn ${getButtonSize(orientation, size)} btn-gold`}
        >
          {buttonText}
        </a>
        </GaEventWrapper>
      </div>
    </div>
  );
};
