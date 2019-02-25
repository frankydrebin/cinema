import store from '../data.js'
export default class Movies {
    constructor () {
        this.movies = [];
    }
    getMovies () {
        return store.getMovies().then(result => {
            this.movies = result
        })
    }
    getMovieById(id) {
        return this.movies.find(item => item.id === id);
    }
    addMovie (movie) {
        this.movies.push(movie)
    }
}