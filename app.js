import express from "express";
import employees from "./db/employees.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((emp) => emp.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: `Employee with id ${id} not found.` });
  }
});

export default app;
