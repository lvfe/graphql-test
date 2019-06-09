'use strict';
class MovieConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async getMovies() {
        return await this.ctx.model.Movie.find({});
    }
    async getPaginateMovies(skip, first, orderBy, filter,limit, page, offset) {
        console.log({limit, offset, page});
        return await this.ctx.model.Movie.paginate({}, {limit, offset, page});
    }
}
module.exports = MovieConnector;