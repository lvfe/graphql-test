exports.graphql = {
    router: '/graphql',
    app: true,
    graphial: true,
    agent: true
};

exports.middleware = [ 'graphql' ];
exports.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/jira',
    options: {}
};
exports.security = {
    csrf: {
        enable: false
    }
};
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
exports.keys = 'graphql test'