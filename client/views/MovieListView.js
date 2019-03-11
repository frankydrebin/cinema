import View from './View.js'
import MovieView from './MovieView.js'
import router from '../Routes.js';
//import { throws } from 'assert';
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.filteredMovieViews = [];
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
        // this.element.addEventListener('click', (e)=> {
        //     if(e.target.tagName !== 'DIV') return ;
        //     e.preventDefault();
        //     const target = e.target;
           
        //     const movie = this.model.getMovieById(target.dataset.id);
        //     let route = router.getRouteByName('details');
        //     history.pushState({name: route.name}, 'movie-detail', `/movies/${target.dataset.id}`);
        //     route.view.setMovie(movie);
        //     let container = document.getElementById('route-container');
        //     container.appendChild(route.view.element)
        // });
        
        this.filter = document.createElement('input');
        this.filter.addEventListener('input', (e) => {
            let query = e.target.value.toLowerCase()
            this.filteredMovieViews = this.movieViews.filter(movie => {
                return movie.model.name.toLowerCase().indexOf(query) === 0;
            })
            this.renderList();
        })
        this.list = document.createElement('div');
        this.list.className = 'list';
        this.render();

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
        this.element.appendChild(this.filter);
        this.element.appendChild(this.list);
        this.renderList();
        return this;
    }
    renderList() {
        this.list.innerHTML = '';
        this.filteredMovieViews.forEach(view => {
            this.list.appendChild(view.render().element)
        });
    }
}
