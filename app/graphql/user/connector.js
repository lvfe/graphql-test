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
}
module.exports = UserConnector;