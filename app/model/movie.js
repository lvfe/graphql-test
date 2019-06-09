'use strict';
const mongoosePaginate=require('mongoose-paginate');
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const MovieSchema = new Schema({
        title: {
            type: String
        },
        actor: {
            type: String
        },
        length: {
            type: Number
        }
    });
    MovieSchema.plugin(mongoosePaginate);
    return mongoose.model('Movie', MovieSchema);
}