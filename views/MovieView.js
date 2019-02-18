import View from './View.js'
export default class MovieView extends View {
    constructor (options) {
        super(options)
    }
    render () {
        this.element.innerHTML = `<div data-id="${this.model.id}" class="movie-name">${this.model.name}</div>`; //set inner html
        return this;
    }
}