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


// Part 3: Using Destructuring Assignment
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);

// Part 4: The Spread Operator
const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with New Property:", clonedStudent);
