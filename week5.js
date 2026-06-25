// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let students = ["Sujan", "Pradip", "Mike"];
let marks = [40, 50, 1];

for (let i = 0; i < marks.length; i++) {
    let grade;

    if (marks[i] >= 70) {
        grade="Distinction";
    } else if (marks[i] >= 60 && marks[i] <= 69) {
        grade = "Merit";
    } else if (marks[i] >= 40 && marks[i] <=59) {
        grade = "pass"
    } else {
        grade= "fail";
    }

    console.log('${students[i]} scored ${marks[i]} and got ${grade}');
}






