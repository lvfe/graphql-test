'use strict'
var Promise = require('bluebird');
module.exports = {
    JIRA: {
        assignee(root, _, ctx) {
            return ctx.connector.user.getBySoeid(root.assignee);
        }
    },
    TFS: {
        assignee(root, _, ctx) {
            return ctx.connector.user.getBySoeid(root.assignee);
        }
    },
    SearchResult: {
        __resolveType(obj, context, info) {
            if(obj.jiraName) {
                return 'JIRA';
            }
            if(obj.tfsName) {
                return 'TFS';
            }
            return null;
        }
    },
    Query: {
        user(root, {soeid}, ctx) {
            return ctx.connector.user.getUserByService(soeid);
        },
        users(root, query, ctx) {
            return ctx.connector.user.getUsers();
        },
        search(root, { body }, ctx) {
            const jiras = ctx.connector.jira.getJIRAs();
            const tfs = ctx.connector.tfs.getTFSs();
            return Promise.join(jiras,tfs).then((res) => {
                return [
                    ...res[0].filter(jira => jira.jiraName.includes(body)),
                    ...res[1].filter(jira => jira.tfsName.includes(body))
                ];
            });
            
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