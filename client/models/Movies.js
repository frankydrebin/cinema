
export default class Movies {
    constructor (url) {
        this.movies = [];
        this.url = url;
    }
    getMovies () {
        return axios.get(this.url).then(res => {
            this.movies = res.data;
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