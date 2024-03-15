const student = {
  fullName: "Sachin Narsingh Singh",
  marks: 81.4,
  printMarks: function () {
    console.log("Marks", this.marks);
  },
};

//here the toString method is stored in prototype
console.log("student.marks.toString()", student.marks.toString());
