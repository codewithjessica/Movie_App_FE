const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cfdcabcb96d1a80dc5a1d19ca4d613e9&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=cfdcabcb96d1a80dc5a1d19ca4d613e9&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div = document.createElement("div");
        });
    });
}