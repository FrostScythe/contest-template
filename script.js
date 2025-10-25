let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  arr.map(emp => {
    if (emp.profession === "developer") console.log(emp);
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(emp => {
    if (emp.profession === "developer") console.log(emp);
  });
}

function addData() {
  const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {

  const filtered = arr.filter(emp => emp.profession !== "admin");
  arr.length = 0;       
  arr.push(...filtered);  
  console.log(arr);
}

function ConcatinateArray() {
  const newArray = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "sara", age: "24", profession: "manager" },
    { id: 7, name: "tom", age: "21", profession: "tester" }
  ];

  const combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
