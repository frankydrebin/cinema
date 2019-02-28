import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'
import router from './Routes.js'

// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/api/movies')
// xhr.onload = function (res) {
//    console.log(res)
//   };

// xhr.send(null);


let container = document.getElementById('route-container');
let movieView = new MovieListView({
    model:  new Movies('api/movies')
});



router.registerRoute({
    name: 'movies',
    url: '/movies',
    view: movieView,
    default: true
})

const movieDetailsView = new MovieDetailsView({

});

router.registerRoute({
    name: 'details',
    url: '/movies/:id',
    view: movieDetailsView
})



// window.addEventListener('hashchange', e => {
//     let parts = window.location.hash.split('/');
//     let id = parts[parts.length-1];
//     let view = null
//     container.innerHTML = '';
//     if (id === '#movies') {
        
//         let route = routes.find(item => item.url === id);
//         view = route.view.render();
        
//     } else {
//          view = movieDetailsView.setMovie(movieView.model.getMovieById(id))
//     }
//     container.appendChild(view.element)
// })

window.addEventListener('load', e => {
    const route = router.routes.find(item => item.default === true);
    const view = route.view;
    container.appendChild(view.element)
    view.initialize().then(() => {
        view.render();
        container.appendChild(view.element)
    })
})

window.addEventListener('popstate', (e) => {
    let route = router.getRouteByName(e.state && e.state.name)
})



