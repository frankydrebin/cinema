
export default class Movies {
    constructor (url) {
        this.movies = [];
        this.url = url;
    }
    getMovies () {
        return fetch(this.url).then(res => {
           return res.json()
        }).then(res => {
            this.movies = res;
            return this.movies;
        });
    }
    getMovieById(id) {
        return this.movies.find(item => item.id === id);
    }
    addMovie (movie) {
        this.movies.push(movie)
    }
}