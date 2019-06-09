'use strict';
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const JIRASchema = new Schema({
        jiraName: {
            type: String
        },
        status: {
            type: String
        },
        assignee: {
            type: String
        }
    });
    return mongoose.model('JIRA', JIRASchema);
}