import View from './View.js'
import MovieView from './MovieView.js'
import MovieDetailsView from './MovieDetailsView.js'
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.model.getMovies().then(result => {
            this.detailElement = new MovieDetailsView({
                model: this.model.movies[0],
                el: document.getElementById('movie-details-view')
            });
            
            this.movieViews = [];
            this.model.movies.forEach((item)=> {
                this.movieViews.push(new MovieView({
                    model: item,
                    tagName: 'div',
                    className: 'movie-item'
                }))
            })
            this.render();
            this.delegateEvents();
        })
    }
    delegateEvents () {
        this.element.addEventListener('click', (e)=> {
            const target = e.target;
            if (target.classList.contains('movie-name')) {
                this.detailElement.setMovie(this.model.getMovieById(target.dataset.id))
            }
        });
        const addButton = document.querySelector('#add-new');
        addButton.addEventListener('click', this.addMovie.bind(this));
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
        this.element.innerHTML = '<button id="add-new" type="button">Add new</button>';
        this.movieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        })
        return this;
    }
}
