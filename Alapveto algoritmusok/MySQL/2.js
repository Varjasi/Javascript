if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
  localStorage.setItem('myFirstKey', 2);
  console.log(localStorage.getItem('myFirstKey'));