'use strict'
module.exports = {
    User: {
        tasks(root, _, ctx) {
            return ctx.connector.jira.getUserTasks(root.soeid);
        }
    },
    Task: {
        __resolveType(obj, ctx, info) {
            if(obj.jiraName){
                return 'JIRA'
            }
            if(obj.tfsName) {
                return 'TFS'
            }
            return null;
        }
    },
    Query: {
        jiras(root, query, ctx) {
            return ctx.connector.jira.getJIRAs();
        },
        tasks(root, query, ctx) {
            return ctx.connector.jira.getTasks();
            // return [
            //     ...ctx.connector.jira.getJIRAs(), ...ctx.connector.tfs.getTFSs()
            // ];
        }
    }
};