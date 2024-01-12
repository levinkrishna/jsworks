function add(n1,n2){
    return n1+n2
}

function cube(n){
    return n**3
}

function maxTwo(n1,n2){
    return n1>n2?n1:n2
}

console.log(add(10,20))

console.log(cube(4))

console.log(maxTwo(10,29));

//create a function smartSub takes two parameters n1,n2
function sub(n1,n2){
    return n1-n2
}
// console.log(sub(10,2));
// console.log(sub(2,10));


function smartSub(n1,n2){
    return n1>n2?n1-n2:n2-n1
}
console.log(smartSub(2,8))

//nth DigitMax(n1,n2)  //n1=482 n2=286 o'th place


function nthDigitMax(n1,n2){
    return n1%10 >n2%10 ?n1 :n2
}
console.log(nthDigitMax(187,580));