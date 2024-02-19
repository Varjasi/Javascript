const express = require('express');
const app = express();
const port = 8080;

// Templating engine beállítása (EJS)
app.set('view engine', 'ejs');

// Változó beállítása
const name = 'Hello, World!';

// Útvonal definiálása
app.get('/', (req, res) => {
  res.render('index', { name: name });
});

// Szerver indítása
app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen.`);
});
