// @ts-check

// Transformer data function provided to the high order component
const transformData = ({ node }, index) => ({
  index,
  id: node.nid,
});

export { transformData };
