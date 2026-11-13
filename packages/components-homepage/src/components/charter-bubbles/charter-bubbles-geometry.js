export const rectanglesOverlap = (first, second, tolerance = 0.01) =>
  first.left < second.right - tolerance &&
  first.right > second.left + tolerance &&
  first.top < second.bottom - tolerance &&
  first.bottom > second.top + tolerance;

export const circlesOverlap = (first, second, tolerance = 0.01) => {
  const firstRadius = Math.min(first.width, first.height) / 2;
  const secondRadius = Math.min(second.width, second.height) / 2;
  const firstX = first.left + first.width / 2;
  const firstY = first.top + first.height / 2;
  const secondX = second.left + second.width / 2;
  const secondY = second.top + second.height / 2;

  return (
    Math.hypot(firstX - secondX, firstY - secondY) <
    firstRadius + secondRadius - tolerance
  );
};
