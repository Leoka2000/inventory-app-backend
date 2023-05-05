const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  require('nodemon')({ script: 'index.js' });
}  

const db = mysql.createConnection({
  user: "root",
  host: "localhost", 
  password: "password",
  database: "employeesystem",
});

// EQUIPMENTS
app.post("/equipments/create", (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const manufacturer = req.body.manufacturer;
  const serial = req.body.serial;
  const price = req.body.price;
  const expiration = req.body.expiration;
  const maintenanceSchedule = req.body.maintenanceSchedule;
  const status = req.body.status;
  const quantity = req.body.quantity;
  const notes = req.body.notes;

  console.log(req.body)

db.query(
  "INSERT INTO equipments (name, type, manufacturer, serial, price, expiration, maintenanceSchedule, status, quantity, notes) VALUES (?,?,?,?,?,?,?,?,?,?)",
  [name, type, manufacturer, serial, price, expiration, maintenanceSchedule, status, quantity, notes],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);
});

app.get("/equipments", (req, res) => {

  db.query("SELECT * FROM equipments", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/equipments/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM equipments WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/equipments/updateQuantity", (req, res) => {
  const id = req.body.id;
  const quantity = req.body.quantity;
  db.query(
    "UPDATE equipments SET quantity = ? WHERE id = ?",
    [quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/equipments/updateMaintenanceSchedule", (req, res) => {
  const id = req.body.id;
  const maintenanceSchedule = req.body.maintenanceSchedule;
  db.query(
    "UPDATE equipments SET maintenanceSchedule = ? WHERE id = ?",
    [maintenanceSchedule, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/equipments/updateNotes", (req, res) => {
  const id = req.body.id;
  const notes = req.body.notes;
  db.query(
    "UPDATE equipments SET notes = ? WHERE id = ?",
    [notes, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/equipments/updateStatus", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  db.query(
    "UPDATE equipments SET status = ? WHERE id = ?",
    [status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


// EQUIPMENTS


// CONSUMABLES
app.post("/consumables/create", (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const manufacturer = req.body.manufacturer;
  const lotNumber = req.body.lotNumber;
  const expiration = req.body.expiration;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const notes = req.body.notes;

  console.log(req.body)

db.query(
  "INSERT INTO consumables (name, type, manufacturer, lotNumber, expiration, quantity, price, notes) VALUES (?,?,?,?,?,?,?,?)",
  [name, type, manufacturer, lotNumber, expiration, quantity, price, notes],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);
});
// CONSUMABLES

//  GET CONSUMABLES
  
app.get("/consumables", (req, res) => {

  db.query("SELECT * FROM consumables", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// GET CONSUMABLES

// DELETE CONSUMABLES

app.delete("/consumables/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM consumables WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// DELETE CONSUMABLES



// UPDATE CONSUMABLES




app.put("/consumables/updateQuantity", (req, res) => {
  const id = req.body.id;
  const quantity = req.body.quantity;
  db.query(
    "UPDATE consumables SET quantity = ? WHERE id = ?",
    [quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/consumables/updateManufacturer", (req, res) => {
  const id = req.body.id;
  const manufacturer = req.body.manufacturer;
  db.query(
    "UPDATE consumables SET manufacturer = ? WHERE id = ?",
    [manufacturer, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/consumables/updateNotes", (req, res) => {
  const id = req.body.id;
  const notes = req.body.notes;
  db.query(
    "UPDATE consumables SET notes = ? WHERE id = ?",
    [notes, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



// Here, we are destructuring the req.body object to get all the required fields: name, type, manufacturer, lotNumber, expiration, quantity, price, notes, and wage. Then, we are updating all these columns in the UPDATE query using placeholders (?) and passing the corresponding values as an array in the second argument to the db.query function. Finally, we are sending the result back to the client as a response.
// UPDATE CONSUMABLES

// if you would like to grab something from the fron end we use req, and if we want to grab something from the backend we use rest
// this function will send all the info to the employees tasble
// FIRST FUNCTION CREATED WHEN DOING BACKEND
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  

db.query(
  "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
  [name, age, country, position, wage],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);
});

// this function requests all the information on the employees table
app.get("/employees", (req, res) => {

  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update/employeePosition", (req, res) => {
  const id = req.body.id;
  const position = req.body.position;
  db.query(
    "UPDATE employees SET position = ? WHERE id = ?",
    [position, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



app.put("/update/employeeAge", (req, res) => {
  const id = req.body.id;
  const age = req.body.age;
  db.query(
    "UPDATE employees SET age = ? WHERE id = ?",
    [age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3030, () => {
  console.log("Yey, your server is running on port 3030");
});


