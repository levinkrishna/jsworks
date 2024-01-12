var items=[
    {id:1,name:"potatto",price:45,avlQty:10,category:"veg"},
    {id:2,name:"onion",price:70,avlQty:10,category:"veg"},
    {id:3,name:"carrot",price:70,avlQty:10,category:"veg"},
    {id:4,name:"egg",price:6,avlQty:100,category:"nonveg"},
    {id:5,name:"chicken",price:125,avlQty:10,category:"nonveg"},
    {id:6,name:"brinjal",price:40,avlQty:10,category:"veg"},
    {id:7,name:"capisicum",price:120,avlQty:10,category:"veg"},
    {id:8,name:"sugar",price:45,avlQty:0,category:"veg"},
    {id:9,name:"dal",price:145,avlQty:0,category:"veg"},
    {id:10,name:"rice",price:48,avlQty:10,category:"veg"},
    
]

items.filter(p=>p.category=="nonveg").forEach(p=>console.log(p.name))

items.filter(p=>p.avlQty>0).forEach(p=>console.log(p.name))

//outofstock

items.filter(p=>p.avlQty==0).forEach(p=>console.log(p.name))

//is potatto available?
//some()true or false

var isAvailable=items.some(p=>p.name=="potatto")
console.log(isAvailable);

//finding item detail
var itemDetail=items.find(p=>p.name=="potatto")
console.log(itemDetail);

//costlyproduct
var costlyProduct=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(costlyProduct);
var lowCost=items.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
console.log(lowCost);


//sort product wrt price order by desc

items.sort((p1,p2)=>p2.price-p1.price)
console.log(items);


var deadProduct=items.reduce((p1,p2)=>p1.avlQty>p2.avlQty?p1:p2)
console.log(deadProduct);


var totalPrice=items.map(p=>p.price).reduce((p1,p2)=>p1+p2)
console.log(totalPrice)