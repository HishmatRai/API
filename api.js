let api ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fea6986d2c14521ae1c56e32077b122"
let div = document.getElementById("div1");

fetch(api)
    .then((sucess)=>{
return sucess.json()
    })
    .then((data)=>{
        console.log(data)
    let articles = data.articles
    console.log(articles)
    for(let key in articles){
    div.innerHTML += 
    "<div>"+"<h1>"+"Title"+"</h1>"
    +"<h2>"+ articles[key].title+ "</h>"
    +"<h1>"+"Author"+"</h1>"
    + "<h3>"+articles[key].author+ "</h3>"
   + "<img src="+articles[key].urlToImage + "/>" 
   +"<h1>"+"Discription"+"</h1>"
   + "<p>"+articles[key].description + "</p>"
   +"<h1>"+"Content :"+"</h1>"
   + "<p>"+articles[key].content + "</p>"
   +"<h1>"+"Published on :"+"</h1>"
   + "<h4>"+articles[key].publishedAt + "</h4>"+"</div>"
  

    }
})
.then((error)=>{
console.log(error)})

// var counter = 0;
// counter= conter + 1;
// conter += 1;