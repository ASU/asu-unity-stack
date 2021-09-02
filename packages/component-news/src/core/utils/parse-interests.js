// @ts-check
const parseInterests = (interests = "") => {
  if (interests?.length === 0) return [];

  const tags = interests
    .split("|")
    .map(label => ({
      label,
    }))
    .filter(label => label);
  return tags;
};

export { parseInterests };
