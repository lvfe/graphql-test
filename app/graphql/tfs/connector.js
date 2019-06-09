'use strict';
class TFSConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async getTfsBySoeid(soeid) {
        return await this.ctx.model.Tfs.find({assignee:soeid});
    }
    async getTFS(soeid) {
        return await this.ctx.model.Tfs.find({soeid:soeid})
    }
    async getTFSs() {
        return await this.ctx.model.Tfs.find({})
    }
}
module.exports = TFSConnector;