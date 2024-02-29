import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

// Create a table instance
const table = new Table();

// Set the columns of the table you want to create
const columns = ["name", "age", "state", "height", "weight"]

// Pass these columns to the Table instance you created
table.setColumns(columns);

const student1 = new Student("John")

student1.addProperty("age", 23)
student1.addProperty("state", "lagos")
student1.addProperty("height", 184)
student1.addProperty("weight", 73)

console.log(student1)

table.setRows(rows)

/**const firstStudent = {
    name: "John",
    age: 23,
    state: "Lagos",
    height: 1.85,
    weight: 82
};

const secondStudent = {
    name: "Tafida",
    age: 54,
    state: "Jos",
    height: 1.75,
    weight: 72
};

const rows = [ firstStudent, secondStudent]

table.setRows(rows)
//table.setRows(student);
console.log(firstStudent)
//table.addRow(firstStudent);

console.log(secondStudent)
//table.addRow(secondStudent);
console.log(columns) */

table.drawTable()