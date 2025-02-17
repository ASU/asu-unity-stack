function deepCloner(obj) {
  // Check if the object is null or not an object, return it if so
  if (obj === null || typeof obj !== 'object') {
      return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
      return new Date(obj.getTime());
  }

  // Handle Array
  if (Array.isArray(obj)) {
      const arrCopy = [];
      for (let i = 0; i < obj.length; i++) {
          arrCopy[i] = deepCloner(obj[i]);
      }
      return arrCopy;
  }

  // Handle Object
  const objCopy = {};
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepCloner(obj[key]);
      }
  }
  return objCopy;
};

export { deepCloner };
