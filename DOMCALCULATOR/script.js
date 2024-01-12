function addition(){
    let n1=document.querySelector("#id_num1").value
    let n2=document.querySelector("#id_num2").value
    let result=Number(n1)+Number(n2)
    console.log(result);
    document.querySelector("#result").innerHTML=`Addition result=${result}`
}