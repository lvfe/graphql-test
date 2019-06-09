'use strict'
module.exports = {
    JIRA: {
        assignee(root, _, ctx) {
            return ctx.connector.user.getBySoeid(root.assignee);
        }
    },
    Query: {
        user(root, {soeid}, ctx) {
            return ctx.connector.user.getUserByService(soeid);
        },
        users(root, query, ctx) {
            return ctx.connector.user.getUsers();
        }
    },
    Mutation: {
        addUser(root, {soeid, name}, ctx) {
            return ctx.connector.user.addUser(name, soeid);
        },
        updateUser(root, {_id, input},ctx) {
            return ctx.connector.user.updateUser(_id, input);
        }
    }
};