import View from './View.js'
export default class MovieView extends View {
    constructor (options) {
        super(options)
    }
    render () {
        this.element.innerHTML = `<div class="movie-name">
                                        <a data-id="${this.model.id}" href=/movies/${this.model.id}>${this.model.name}</a></div>`; 
        return this;
    }
}