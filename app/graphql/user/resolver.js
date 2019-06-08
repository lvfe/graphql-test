'use strict'
module.exports = {
    Query: {
        user(root, {soeid}, ctx) {
            return ctx.connector.user.getUserByService(soeid);
        },
        users(root, query, ctx) {
            return ctx.connector.user.getUsers();
        }
    }
};