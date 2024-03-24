

window.addEventListener("DOMContentLoaded",function(){
    const form = document.getElementById("form");
console.log("確認",form);
form.addEventListener("submit",function(event){
    console.log("確認2");
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const isvalueable = document.getElementById("yes").checked;
    var price = 0;

    console.log(title);
    console.log(author);
    console.log(genre);
    console.log(isvalueable);
    if(isvalueable){
        price = document.getElementById("price").value;
        
        }
        console.log(price);
    const script = {
        title: title,
        author: author,
        genre: genre,
        price : price
        
    } ;
axios.post('', script)
.then(response => {
    console.log(response);
  });
})
})
