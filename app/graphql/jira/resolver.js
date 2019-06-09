'use strict'
module.exports = {
    User: {
        jiras(root, _, ctx) {
            return ctx.connector.jira.getUserJiras(root.soeid);
        }
    },
    Query: {
        jiras(root, query, ctx) {
            return ctx.connector.jira.getJIRAs();
        }
    }
};