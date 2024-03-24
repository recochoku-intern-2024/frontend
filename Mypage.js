function getMypage() {
    const Mypage = {
        title: '1',
        author: '1',
        genre: '1',
        price: '1'
    };
    console.log('確認');
    return Mypage;
    
   }
   let  Mypage = getMypage();
document.getElementById('title').textContent = Mypage.title;

document.getElementById('author').textContent = Mypage.author;

document.getElementById('genre').textContent = Mypage.genre;

document.getElementById('price').textContent = Mypage.price;