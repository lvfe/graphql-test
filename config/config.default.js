'use strict';

module.exports = () => {
    const config = {};
    config.graphql = {
        router: '/graphql',
        app: true,
        graphial: true,
        agent: true
    };
    
    config.middleware = [ 'graphql'];
    config.mongoose = {
        url: 'mongodb://127.0.0.1/jira',
        options: {}
    };
    config.security = {
        csrf: {
            ignore: () => true
        }
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.keys = 'graphqltest';
    return config;
}