function getengekishousai(){
    const value = {
        title:"作品名",
        author:"作家名",
        genre:"ジャンル名",
        price:"値段"
    
}
const title =document.getElementById('title')
title.innerText= value.title
const author =document.getElementById('author')
author.innerText =value.author
const genre =document.getElementById('genre')
genre.innerText =value.genre
const price =document.getElementById('price')
price.innerText =value.price
}
getengekishousai();