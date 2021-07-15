// @ts-check
import React, { useState, useMemo } from "react";
/**
 *
 * @param {{
 *    onClick?: (selected: boolean) => void
 *    baseIconClassName1: string
 *    baseIconAriaLabel1?: string
 *    baseIconStyle1?: Object
 *    baseIconClassName2: string
 *    baseIconAriaLabel2?: string
 *    baseIconStyle2?: Object
 *    ariaLabel: string
 *    ariaControls: string
 * }} props
 * @returns {JSX.Element}
 */
function BaseStateIconButton({
  baseIconClassName1,
  baseIconAriaLabel1,
  baseIconStyle1,
  baseIconAriaLabel2,
  baseIconClassName2,
  baseIconStyle2,
  ariaLabel,
  ariaControls,
  onClick = () => null,
}) {
  const [selected, setSelected] = useState(false);
  const baseIcon = (iconClassName, display, icoAriaLabel, style) => (
    <span
      style={{
        cursor: "pointer",
        display,
      }}
    >
      <i
        className={`${iconClassName}`}
        aria-label={icoAriaLabel}
        title={icoAriaLabel}
        style={style}
      />
    </span>
  );

  const onClickButton = () => {
    setSelected(!selected);
    onClick(!selected);
  };

  const res = (
    <span
      role="button"
      tabIndex={0}
      onKeyDown={onClickButton}
      onClick={onClickButton}
      aria-label={ariaLabel}
      aria-expanded={selected}
      aria-controls={ariaControls}
    >
      {baseIcon(
        baseIconClassName1,
        selected ? "" : "none",
        baseIconAriaLabel1,
        baseIconStyle1
      )}
      {baseIcon(
        baseIconClassName2,
        selected ? "none" : "",
        baseIconAriaLabel2,
        baseIconStyle2
      )}
    </span>
  );

  return useMemo(() => res, [selected]);
}

export { BaseStateIconButton };
