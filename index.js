// function getengekiitiran(){
//     const value =[ 
//     {
//         title:"作品名",
//         author:"作家名",
//         genre:"gg",
//         price:"cc",
//     },
//     {
//         title:"作品名",
//         author:"aa",
//         genre:"kk",
//         price:"fd",
//     }, 
//     {
//         title:"作品名",
//         author:"ef",
//         genre:"kamera",
//         price:"100",
//     },
//      {
//         title:"作品名",
//         author:"gif",
//         genre:"hep",
//         price:"90",
//     }
// ]
// value.forEach(dramatic =>{
//     const tr =document.createElement('tr')
//     const tbody=document.getElementById('tbody')
//     tbody.appendChild(tr)
//     const titleTd =document.createElement('td')
//     const authorTd =document.createElement('td')
//     const genreTd =document.createElement('td')
//     const priceTd =document.createElement('td')
//     tr.appendChild(titleTd)
//     tr.appendChild(authorTd)
//     tr.appendChild(genreTd)
//     tr.appendChild(priceTd)
//      titleTd.innerText = dramatic.title
//      authorTd.innerText = dramatic.author
//      genreTd.innerText = dramatic.genre
//      priceTd.innerText = dramatic.price
//     })


//      console.log('kakunin');
//      return value 

// }
// const getengekiitiran =getengekiitiran();

axios.get('http://localhost:8000/kyakuhon')
.then(response => {
console.log(response);
response.data.forEach((dramatic)=>{
    const tr =document.createElement('tr')
    const tbody=document.getElementById('tbody')
    tbody.appendChild(tr)
    const titleTd =document.createElement('td')
    const authorTd =document.createElement('td')
    const genreTd =document.createElement('td')
    const priceTd =document.createElement('td')
    tr.appendChild(titleTd)
    tr.appendChild(authorTd)
    tr.appendChild(genreTd)
    tr.appendChild(priceTd)
     titleTd.innerText = dramatic.title
     authorTd.innerText = dramatic.author
     genreTd.innerText = dramatic.genre
     priceTd.innerText = dramatic.price
    });
});