class Student{
    constructor(name,rol,course){
        this.name=name
        this.rolno=rol
        this.course=course
    }
    displayStudent(){
        console.log(this.name,this.rolno,this.course);
    }
}

var st=new Student("vijay","25","django")
st.displayStudent()