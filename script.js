let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function ConcatinateArray() {
  let newArray = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "sara", age: "24", profession: "manager" },
    { id: 7, name: "tom", age: "21", profession: "tester" }
  ];

  let combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
