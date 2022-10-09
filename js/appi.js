const API_KEY = `74cf07cbcff58397c32fe332f07646fa`;
const image_path =`https://api.themoviedb.org/t/p/w1280`;
const trailer_path =`http://www.youtube.com/watch?v=`;


const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const mainGridTittle = document.querySelector('.favorites h1');
const mainGrid = document.querySelector('.favorites .movies-grid');

// пошук фільмів
get_movie_by_search()
async function get_movie_by_search (){
const resp = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
const respData = await resp.json();
console.log(respData.results);
return respData.results;
}

// пошук фільма в інпуті
btn.addEventListener('click', add_searched_movies_to_dom)
async function add_searched_movies_to_dom(){
const data = await get_movie_by_search(input.value)
console.log(data);
}
