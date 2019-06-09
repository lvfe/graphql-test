'use strict'
module.exports = {
    Query: {
        movies(root, query, ctx) {
            return ctx.connector.movie.getMovies();
        },
        paginateMovie(root, query, ctx) {
            const { skip, first, orderBy, filter, limit, page, offset } = query;
            return ctx.connector.movie.getPaginateMovies(skip, first, orderBy, filter,limit, page, offset);
        }

    }
};