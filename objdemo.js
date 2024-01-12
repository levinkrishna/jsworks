// var student={
//     name:"levin",
//     age:30,
//     course:"django"

// }

// console.log(student.course);

var employee={
    name:"levin",
    desig:"hr",
    salary:20000
}
console.log(employee.name);
console.log("salary" in employee);
//add a new attribute

employee.gender="male"
console.log(employee.gender);
console.log(employee);

//update employee salary as 30000

employee.salary=30000
console.log(employee.salary);