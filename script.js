let books = [
                {},
                {BookName:"The fault in our stars", Book_Author:"John Green", Date_Published: "2016", Book_Pages: "378", Genres: "Drama, Romance, Teen", Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat odit libero similique cumque recusandae fugit, quos ducimus perspiciatis aliquid, ratione possimus quae reprehenderit iure quod optio harum porro", img1: "images/book1.jpg", img2: "images/book1back.jpg"},
                {BookName:"Divergent", Book_Author:"Veronica Roth", Date_Published: "2014", Book_Pages: "590", Genres: "Fiction, Romance", Description: "Eiojcs ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum incidunt voluptate cupiditate quasi temporibus possimus quis, rerum quaerat, natus harum mollitia sit veniam perspiciatis, corporis officia similique quia minus?", img1: "images/book2.jpg", img2: "images/book2back.jpg"},
                {BookName:"It ends with us", Book_Author:"Colleen hoover", Date_Published: "2019", Book_Pages: "378", Genres: "Drama, Romance, Teen", Description: "Kohem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repellendus nobis dolores ut eum debitis, repudiandae iure, beatae ipsam, cupiditate commodi aliquam laboriosam? Ipsam libero, enim expedita non suscipit cumque?", img1: "images/book3.jpg", img2: "images/book3back.jpg"},
                {BookName:"November 9", Book_Author:"Colleen hoover", Date_Published: "2020", Book_Pages: "478", Genres: "Drama, Romance", Description: "Johsn ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci, vel error quibusdam inventore quaerat minus animi eveniet sed esse voluptatum voluptates autem possimus praesentium ratione reprehenderit eligendi enim nostrum!", img1: "images/book4.jpg", img2: "images/book4back.jpg"},
                {BookName:"The Alchemist", Book_Author:"Paulo Coelho", Date_Published: "2012", Book_Pages: "220", Genres: "Drama, Self Discovery", Description: "Yohsc ipsum dolor sit amet consectetur adipisicing elit. In maiores animi possimus, iusto tempora, quisquam nemo laboriosam dolor libero assumenda pariatur tempore autem, fugit quis neque quaerat sit nostrum fugiat.", img1: "images/book5.jpg", img2: "images/book5back.jpg"}
            ];

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

function openBookDetails(bookNum){
    const page = window.open('showBookDetails.html');
    page.addEventListener('DOMContentLoaded', () => {
        page.document.getElementById("i_img1").src = books[bookNum].img1;
        page.document.getElementById("i_img2").src = books[bookNum].img2;
        page.document.getElementById("expandedImg").src = books[bookNum].img1;
        page.document.getElementById("i_book-title").innerHTML += books[bookNum].BookName;
        page.document.getElementById("i_book_author").innerHTML += books[bookNum].Book_Author;
        page.document.getElementById("i_date_published").innerHTML += books[bookNum].Date_Published;
        page.document.getElementById("i_book_pages").innerHTML += books[bookNum].Book_Pages;
        page.document.getElementById("i_genres").innerHTML += books[bookNum].Genres;
        page.document.getElementById("i_book-description").innerHTML += books[bookNum].Description;
    })
}
