

class Router {
    constructor () {
        this.routes = []
    }

    registerRoute (route) {
        this.routes.push(route);
    }
    getRouteByName(name) {
        return this.routes.find(item => item.name === name);
    }
    getRouteByUrl(url) {
        
    }
}


export default new Router();