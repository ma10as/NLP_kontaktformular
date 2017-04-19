module.exports = {
    production: {
        src: ['<%= package.buildresources %>/**']
    },
    development: {
        src: ['<%= package.buildresources %>/**']
    },
    temp: {
        src: ['<%= package.resources%>/temp/**']
    }
};