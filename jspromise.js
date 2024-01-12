var mypromise=new Promise((res,rej)=>{
    let watchtime=3
    if (watchtime>2){
        res("good sec")
    }
})

mypromise.then(data=>console.log("lets start angular"))
