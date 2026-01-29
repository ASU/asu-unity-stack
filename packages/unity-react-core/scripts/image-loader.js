// Custom loader for handling image imports in Node.js
// This allows tsx to run without errors when encountering image files

const originalRequire = require('module').prototype.require;

require('module').prototype.require = function (id) {
  if (typeof id === 'string' && /\.(jpe?g|png|gif|svg|webp|bmp|ico)$/i.test(id)) {
    return `/assets/images/${id.split('/').pop()}`;
  }

  return originalRequire.apply(this, arguments);
};

console.log("Image loader initialized - image imports will return placeholder paths");
