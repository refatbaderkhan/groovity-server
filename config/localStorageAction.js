if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const localStorageAction = (key, value) => {
  if (value) localStorage.setItem(key, value);
  else return localStorage.getItem(key);
}

module.exports = localStorageAction;