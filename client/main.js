import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'



let movies = new Movies();
let movieView = new MovieListView({
    model: movies
});

const movieDetailsView = new MovieDetailsView({

});

const routes = [{
    name: 'movies',
    url: '#movies',
    view: movieView
},
{
    name: 'movieDetails',
    url: '#movies/:id',
    view: movieDetailsView
}
]
let container = document.getElementById('route-container');
window.addEventListener('hashchange', e => {
    let parts = window.location.hash.split('/');
    let id = parts[parts.length-1];
    let view = null
    container.innerHTML = '';
    if (id === '#movies') {
        
        let route = routes.find(item => item.url === id);
        view = route.view.render();
        
    } else {
         view = movieDetailsView.setMovie(movieView.model.getMovieById(id))
    }
    container.appendChild(view.element)
})
window.addEventListener('load', e => {
    const view = movieView.render();
    container.appendChild(view.element)
})



