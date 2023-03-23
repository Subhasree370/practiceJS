const studentData = [
    {
        name: 'Ram',
        score: 40
    },
    {
        name: 'sham',
        score: 20
    },
    {
        name: 'jodu',
        score: 55
    },
    {
        name: 'modu',
        score: 69
    }
]
//Q1:  write a function to increase all students score by 20. (use map or reduce method)


console.log(studentData);
console.log("NEW studentData .............");
const newStudentData = studentData.map(obj => {
    return {...obj, score: obj.score+20};
});

console.log(newStudentData);
