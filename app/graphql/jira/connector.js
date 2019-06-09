'use strict';
class JIRAConnector {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async getJIRAs() {
        return await this.ctx.model.Jira.find({});
    }
    async getUserJiras(soeid) {
        return await this.ctx.model.Jira.find({assignee:soeid});
    }
    async getTasks() {
        const res1 = await this.ctx.model.Jira.find({});
        const res2 = await this.ctx.model.Tfs.find({});
        const res = res1.concat(res2);
        console.log(res);
        return res;
    }
    async getUserTasks(soeid) {
        const res1 = await this.ctx.model.Jira.find({assignee:soeid});
        const res2 = await this.ctx.model.Tfs.find({assignee:soeid});
        const res = res1.concat(res2);
        console.log(res);
        return res;
    }
}
module.exports = JIRAConnector;