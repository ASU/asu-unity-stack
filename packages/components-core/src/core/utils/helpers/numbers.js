export const createRange = (from, to, stop) => {
  let i = from;
  const range = [];

  while (i < to) {
    if (i > 0 && i <= stop) range.push(i);
    i += 1;
  }

  return range;
};
