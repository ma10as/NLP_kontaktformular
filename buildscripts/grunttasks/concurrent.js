module.exports = {
    development: {
        tasks: ['nodemon:development', 'watchDevelopment'],
        options: {
            logConcurrentOutput: true
        }
    },
    debug: {
        tasks: ['nodemon:debug', 'watchDevelopment', 'node-inspector:debug'],
        options: {
            logConcurrentOutput: true
        }
    }
};