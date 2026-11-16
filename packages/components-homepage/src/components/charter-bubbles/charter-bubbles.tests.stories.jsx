import { CharterBubbles } from "./CharterBubbles.jsx";
import {
  BreakpointPreservesOpen as BreakpointPreservesOpenStory,
  CarouselNavigation as CarouselNavigationStory,
  DesktopBoundaryContract as DesktopBoundaryContractStory,
  HtmlParity as HtmlParityStory,
  InvalidDataFallback as InvalidDataFallbackStory,
  LongContent as LongContentStory,
  MalformedContractsStayUnenhanced as MalformedContractsStayUnenhancedStory,
  NoScript as NoScriptStory,
  OpenResearch as OpenResearchStory,
  ReducedMotion as ReducedMotionStory,
  StaticContract as StaticContractStory,
  UnsafeUrlFallback as UnsafeUrlFallbackStory,
} from "./charter-bubbles.stories.jsx";

export default {
  title: "Homepage/Charter bubbles/Tests",
  component: CharterBubbles,
};

export const BreakpointPreservesOpen = {
  ...BreakpointPreservesOpenStory,
  name: "Breakpoint resets cluster to closed",
};

export const CarouselNavigation = {
  ...CarouselNavigationStory,
};

export const DesktopBoundaryContract = {
  ...DesktopBoundaryContractStory,
};

export const HtmlParity = {
  ...HtmlParityStory,
};

export const InvalidDataFallback = {
  ...InvalidDataFallbackStory,
};

export const LongContent = {
  ...LongContentStory,
};

export const MalformedContractsStayUnenhanced = {
  ...MalformedContractsStayUnenhancedStory,
};

export const NoScript = {
  ...NoScriptStory,
};

export const OpenResearch = {
  ...OpenResearchStory,
};

export const ReducedMotion = {
  ...ReducedMotionStory,
};

export const StaticContract = {
  ...StaticContractStory,
};

export const UnsafeUrlFallback = {
  ...UnsafeUrlFallbackStory,
};
