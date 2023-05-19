const API_LINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f620c9bc859bc744841e2a7c8e2a27fa&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=f620c9bc859bc744841e2a7c8e2a27fa&query=";

const  mainSection = document.getElementById("section");
const  searchForm = document.getElementById("search-form");
const  searchInput = document.getElementById("search-input");

returnMovies(API_LINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const divCard = document.createElement("div");
            divCard.setAttribute("class", "movie-card");
            const divRow = document.createElement("div");
            divRow.setAttribute("class", "row");
            const divColumn = document.createElement("div");
            divCard.setAttribute("class", "column");
            const movieImage = document.createElement("img");
            divCard.setAttribute("class", "thumbnail");
            const movieTitle = document.createElement("h3");

            movieTitle.innerText = `${element.title}`;
            movieImage.src = IMG_PATH + element.poster_path;

            divCard.appendChild(movieImage);
            divCard.appendChild(movieTitle);
            divColumn.appendChild(divCard);
            divRow.appendChild(divColumn);

            mainSection.appendChild(divRow);





        });
    });
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    mainSection.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCH_API + searchItem)
        search.value = '';
    }
});



