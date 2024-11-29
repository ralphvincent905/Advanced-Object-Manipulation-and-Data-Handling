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