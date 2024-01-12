//operators

//arithematic(+,-,/,*,%,**)

loanAmount=200000
interestRate=9
tenure=20

//EMI=p*i*(1+i)^n/(1+i)^n-1

//p=principle amount
//r=interestrate per month interest/12
// i=r/100
// n=year*12

p=loanAmount
r=interestRate/12
i=r/100
n=tenure*12

EMI=p*i*(1+i)**n/(((1+i)**n)-1)
    console.log(EMI);

//Total interest payable


TotalpayableAmount=EMI*n
TotalInterestPayable=TotalpayableAmount-p
console.log("total payable amount",TotalpayableAmount);
console.log("total interest payable",TotalInterestPayable);

//logical operators(&&,||,!)
//&=>&& false false
//OR=>TRUE

