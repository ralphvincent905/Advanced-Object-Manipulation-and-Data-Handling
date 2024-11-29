// Part 1: Understanding and Creating Objects
const student = {
    name: "Ralph Sampaga",
    age: 30,
    enrolled: true,
    courses: ["Algorithm", "Database", "Web Development"],
    displayInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}`;
    }
}

console.log("Name:", student.name);
console.log("Age:", student.age);

console.log(student.displayInfo());

// Part 2: Working with JSON
const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("Newly Created Object:", newStudent);

console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(newStudent));