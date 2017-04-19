module.exports = {
    options: {
        config: '<%= package.configs %>/csscomb/csscomb-config.json'
    },
    test: {
        files: [{
            expand: true,
            filter: 'isFile',
            cwd: '<%= package.resources %>/sass',
            src: '**/*.sass',
            dest: '<%= package.resources %>/sass'
        }]
    }
};