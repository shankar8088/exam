let student = {
  name: "shankar",
  age: 20,
  marks: [80, 85, 90],

  avg: function () {
    let t = 0;
    for (let m of this.marks) t += m;
    return t / this.marks.length;
  }
};

for (let x in student) console.log(x + ":", student[x]);

console.log("Avg:", student.avg());
