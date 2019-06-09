'use strict'
module.exports = {
    Query: {
        tfs(root, {soeid}, ctx) {
            return ctx.connector.tfs.getTFS(soeid);
        },
        tfss(root, {soeid}, ctx) {
            return ctx.connector.tfs.getTFSs();
        }
    }
};