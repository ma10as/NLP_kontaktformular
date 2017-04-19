module.exports = {
    production:{
        options: {
            compress: true,
            mangle: true,
            sourceMap: false,
            sourceMapIncludeSources: false,
        },
        files: {
            '<%= package.buildresources %>/js/core.min.js': ['<%= package.resources%>/temp/js/core.js'],
            '<%= package.buildresources %>/js/controller.min.js': ['<%= package.resources%>/temp/js/controller.js']
        }
    }
};