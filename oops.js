// class Employee{
//     setEmp(name,dept){//initialising instance variables (constructor)
//         this.name=name
//         this.dept=dept
//     }
//     printEmp(){
//         console.log(this.name,this.dept);
//     }
// }

// var obj=new Employee()
// obj.setEmp("levin","hr")


// obj.printEmp()


// by using constuctor


class Employee{
    constructor(name,dept){//initialising instance variables (constructor)
        this.name=name
        this.dept=dept
    }
    printEmp(){
        console.log(this.name,this.dept);
    }
}

var obj=new Employee("levin","hr")



obj.printEmp()