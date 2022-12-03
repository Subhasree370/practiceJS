

const fs = require("fs");
fs.writeFileSync("hello1.txt","This is a new file created by fileSystem");


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

console.log(studentData);
console.log("NEW studentData .............");
const newStudentData = studentData.map(obj => {
    return {...obj, score: obj.score+20};
    return obj;
});

console.log(newStudentData);
