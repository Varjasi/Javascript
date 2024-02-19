  
  /*
  // Csatlakozás az MYSQL-hez
  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  */
  // Adatbázis létrehozása
  /*
  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      connection.query("CREATE DATABASE mydb", function (err, result) { 
          if (err) throw err;
          console.log("Database created");
        });
      
    });
    
  
    // Táblázat létrehozása
  
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
    });
    */
  
    // 
  
  /*
  // Oszlop létrehozása
  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "ALTER TABLE customers ADD COLUMN number INT(255)";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Column created");
      });
    });
    /*
    
   // Értéktömb beszúrása
  
   connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO customers (name, address) VALUES ?";
      var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });
    */
  /*
    // Oszlop kiválasztása
  
    connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT number FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result[3].number);
      });
    });
    */
  
    // Érték növelése
  
  /*
    connection.connect(function(err) {
      if (err) throw err;
      var sql = "UPDATE customers SET number = number + 1 WHERE id = 1";
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
    });
  */
  // Érték kiírása
  

  var mysql = require('mysql');
  
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  connection.connect(function(err) {
      if (err) throw err;
      connection.query("SELECT number FROM customers", function fontos (err, result, fields) {
        if (err) throw err;
        const eredmeny = result[0].number;
        console.log(eredmeny);
        // EJS

        const express = require('express');
        const app = express();
        const port = 8080;
        
        // Templating engine beállítása (EJS)
        app.set('view engine', 'ejs');
        
        // Változó beállítása
        
        
        // Útvonal definiálása
        app.get('/', (req, res) => {
          res.render('index', { name: eredmeny });
        });
        
        // Szerver indítása
        app.listen(port, () => {
          console.log(`A szerver fut a http://localhost:${port} címen.`);
        });
      });
  
});









 

    
/*
    // HTTP modul + Fájlbeolvasás

  var http = require('http');
  var fs = require('fs');
  http.createServer(function (req, res) {
    fs.readFile('6.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
  */

  
  