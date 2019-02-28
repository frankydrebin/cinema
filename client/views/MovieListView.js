import View from './View.js'
import MovieView from './MovieView.js'
import router from '../Routes.js';
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.movieViews = [];
        this.delegateEvents();
    }

    initialize () {
        return this.model.getMovies().then(result => {
            result.forEach((item)=> {
                this.movieViews.push(new MovieView({
                    model: item,
                    tagName: 'div',
                    className: 'movie-item'
                }))
            })
            
        })
    }

    delegateEvents () {
        this.element.addEventListener('click', (e)=> {
            e.preventDefault();
            const target = e.target;
           
            const movie = this.model.getMovieById(target.dataset.id);
            let route = router.getRouteByName('details');
            history.pushState({name: route.name}, 'movie-detail', `/movies/${target.dataset.id}`);
            route.view.setMovie(movie);
            let container = document.getElementById('route-container');
            container.appendChild(route.view.element)
        });

    }
    addMovie () {
        const movie = {
            name: 'New Movie',
            id: '22'
        }
        this.element.appendChild(new MovieView({
            model: movie
        }).render().element)
    }
    render() {
        this.movieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        })
        return this;
    }
}
