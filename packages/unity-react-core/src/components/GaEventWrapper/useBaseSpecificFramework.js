// where does this hook belong? There might be a better location for it.
import { useId } from "react";

// used inside the StaticStory component in packages/unity-react-core/.storybook/decorators.tsx
export const identifierPrefix = "staticMarkup";

export function useBaseSpecificFramework() {
  const id = useId();
  /**
   * passing true will allow the prop to be set,
   * passing undefined will make sure the prop does not appear
   * - (passing false or null will result in the prop being added which is not what we want)
   * Example:
   * - onClick={isReact && handleClose}
   * - data-bs-dismiss={isBootstrap && "alert"}
   */
  const isBootstrap = id.indexOf(identifierPrefix) > -1 ? true : undefined;
  const isReact = !isBootstrap ? true : undefined;

  return {
    isBootstrap,
    isReact,
  };
}
