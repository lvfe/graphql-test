'use strict'
module.exports = {
    User: {
        // __resolveType(root, _, ctx) {
        //     return ctx.connector.tfs.getBySoeid(root.assignee);
        // }
        tfss(root, _, ctx) {
            return ctx.connector.tfs.getTfsBySoeid(root.soeid);
        }
    },
    Query: {
        tfs(root, {soeid}, ctx) {
            return ctx.connector.tfs.getTFS(soeid);
        },
        tfss(root, {soeid}, ctx) {
            return ctx.connector.tfs.getTFSs();
        }
    }
};