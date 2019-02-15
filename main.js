import store from './data.js'

store.getMovies().then(result => {
    let movies = new Movies(result);
    let movieView = new MovieListView(movies, document.getElementById('movie-list'));
    movieView.render();
})

class Movies {
    constructor (movies) {
        this.movies = movies;
    }
    getMovies () {
        return this.movies;
    }
    getMovieById(id) {
        return this.movies.find(item => item.id === id);
    }
    addMovie (movie) {
        this.movies.push(movie)
    }
}

class View {
    constructor (el) {
        this.element = el;
    }
    render () {
        return this;
    }
    clear () {
        this.element.innerHTML = '';
        return this;
    }
}

// Create Class MovieView extend View
// Change View constructor to create element if not passed

class MovieListView extends View {
    constructor(model, el) {
        super(el);
        this.model = model;
        this.detailElement = new MovieDetailsView(this.model.getMovies()[0], document.getElementById('movie-details-view'));
        
        this.element.addEventListener('click', (e)=> {
            const target = e.target;
            if (target.classList.contains('movie-item')) {
                this.detailElement.setMovie(this.model.getMovieById(target.dataset.id))
            }
        });
    }
    render() {
        let movies = this.model.getMovies();
        movies.forEach(item => {
            let movie = document.createElement('div'); //create el
            movie.innerHTML = `<div data-id="${item.id}" class="movie-item">${item.name}</div>`; //set inner html
            this.element.appendChild(movie); // add inner html to the element
        });
        return this;
    }
}

class MovieDetailsView extends View {
    constructor (movie, el) {
        super(el);
        this.movie = movie;
    }

    setMovie(movie) {
        this.movie = movie;
        this.render();
    }
    render () {
        const {name, director, year} = this.movie;
        //const name = this.movie.name; const director = this.movie.directore; const year = this.movie.year;
        let movie = document.createElement('div');
        movie.innerHTML = `<div>title: ${name}</div>
                            <div>year: ${year}</div>
                            <div>direcior: ${director}</div>`;
        this.clear();
        this.element.appendChild(movie);
        return this;
    }
}