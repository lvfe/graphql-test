'use strict';
class UserConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async getUserByService(Id) {

        return await this.ctx.model.User.find({soeid: Id});
    }
    async getUsers() {
        return await this.ctx.model.User.find({});
    }
    async getBySoeid(soeid) {
        return await this.ctx.model.User.findOne({soeid});
    }
    async addUser(name, soeid) {
        return await this.ctx.model.User.insertMany([{ name, soeid }]);
    }
    async updateUser(id, input) {
        return await this.ctx.model.User.updateOne({_id:id}, input);
    }
}
module.exports = UserConnector;