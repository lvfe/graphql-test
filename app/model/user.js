'use strict';
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        soeid: {
            type: String
        },
        name: {
            type: String
        }
    });
    return mongoose.model('User', UserSchema);
}