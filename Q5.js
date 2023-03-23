const users = [
  { fname: "subhasree", lname: "maji", age: "30" },
  { fname: "abc", lname: "maji", age: "75" },
  { fname: "xyz", lname: "maji", age: "50" },
  { fname: "pqr", lname: "maji", age: "30" },
];

const output = users.filter((x) => x.age < 35).map((x) => x.fname);

const output1 = users.reduce(function (acc, curr) {
  if (curr.age < 35) {
    acc.push(curr.fname);
  }
  return acc;
}, []);

console.log(output1);
