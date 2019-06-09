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
}
module.exports = JIRAConnector;