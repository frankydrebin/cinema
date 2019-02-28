import View from './View.js'
import router from '../Routes.js';
export default class MovieDetailsView extends View {
    constructor (options) {
        super(options);
    }

    setMovie(movie) {
        this.model = movie;
        return this.render();
    }
    render () {
        const {name, director, year} = this.model;
        
        let movie = document.createElement('div');
        movie.innerHTML = ` <div><a href='#movies'>Back to List</a></div>
                            <div>title: ${name}</div>
                            <div>year: ${year}</div>
                            <div>direcior: ${director}</div>`;
        this.clear();
        this.element.appendChild(movie);
        return this;
    }
}