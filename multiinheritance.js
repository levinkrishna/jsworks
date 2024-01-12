class P1{
    m1(){
        console.log("m1 method");
    }
}

class P2 extends P1{
    m2(){
        console.log("m2 method");
    }
}

class P3 extends P2{
    m3(){
        console.log("m3 method");
    }
}

var obj=new P3()
obj.m3()
obj.m2()
obj.m1()