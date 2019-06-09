'use strict';
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TFSSchema = new Schema({
        tfsName: {
            type: String
        },
        assignee: {
            type: String
        }
    });
    return mongoose.model('Tfs', TFSSchema);
}