import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

// Create a table instance
const table = new Table();

// Set the columns of the table you want to create
const columns = ["name", "state Of Origin", "age", "height", "weight"]

// Pass these columns to the Table instance you created
table.setColumns(columns);

//Create a student instance with the name John
const student = new Student("John");

// Add properties to the student instance
//student.addProperty("name", "John")
student.addProperty("state Of Origin", "Abia");
student.addProperty('age', 20);
student.addProperty('height', 180);
student.addProperty('weight', 80)

console.log(student.properties)

const student1 = Object.fromEntries(student.properties.map((s) => [s.label, s.value]))

console.log(student1)

table.setColumns(columns);
table.addRow(student1)

table.drawTable()