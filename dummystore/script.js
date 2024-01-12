fetch("https://fakestoreapi.com/products").
then(res=>res.json()).
then(data=>displayproducts(data))

fetch("https://fakestoreapi.com/products/categories").
then(res=>res.json()).
then(data=>displayCategories(data))

function displayproducts(products){
    let htmlData=``
    for(let p of products){
        htmlData+=`<div class="col-lg-3 col-md-4 col-6">
        <div class="card" style="width: 18rem;">
          <img src="${p.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  
      </div>
   `

    }
    document.querySelector("#result").innerHTML=htmlData
}


function filterProductsBYCategory(event){
    let category=event.target.value
    fetch(`https://fakestoreapi.com/products/category/${category}`).
    then(res=>res.json()).
    then(data=>displayproducts(data))
}

function displayCategories(categories){
  let htmlData=``
  for (let c of categories){
    htmlData+=`
    <button value="${c}" class="btn btn-outline-dark" onclick="filterProductsBYCategory(event)">${c}</button>
    `
  }
  document.querySelector("#category").innerHTML=htmlData

}