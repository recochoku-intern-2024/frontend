function getMypage() {
    const Mypage = [
    {
        title: '1',
        author: '1',
        genre: '1',
        price: '1'
    },
    {
        title: '2',
        author: '2',
        genre: '2',
        price: '2'
    },
];
    console.log('確認');
    return Mypage;
    
   }
   let  Mypages = getMypage();

   Mypages.forEach((Mypage,index)=>{
    const tr = document.createElement('tr')
    const title = document.createElement('td')
    const author = document.createElement('td')
    const genre = document.createElement('td')
    const price = document.createElement('td')
    title.textContent = Mypage.title;
    author.textContent = Mypage.author;
 genre.textContent = Mypage.genre;
    price.textContent = Mypage.price;
    tr.appendChild(title)
    tr.appendChild(author)
    tr.appendChild(genre)
    tr.appendChild(price)
    
    const table =document.getElementById('tbody')
    table.appendChild(tr)
   });
  
document.getElementById('title').textContent = Mypage[0].title;

document.getElementById('author').textContent = Mypage[0].author;

document.getElementById('genre').textContent = Mypage[0].genre;

document.getElementById('price').textContent = Mypage[0].price;