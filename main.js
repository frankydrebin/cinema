import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'



let movies = new Movies();
let movieView = new MovieListView({
    model: movies, 
    el:document.getElementById('movie-list')
});


