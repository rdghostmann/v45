// lib/generateUniqueID.js
export const generatePrefix = (name) => {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
  };
  
  export const generateUniqueID = (name) => {
    const prefix = generatePrefix(name);
    const randomString = Math.random().toString(36).slice(2, 11).toUpperCase();
    return `${prefix}-${randomString}`;
  };
  