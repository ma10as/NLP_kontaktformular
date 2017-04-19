module.exports = {    
    core: {
        options: {
            sourceMap:true
        },
        files:{
            '<%= package.siteName %>/<%= package.buildresources %>/js/core.min.js' : [
                '<%= package.resources %>/js/libs/angular.js',
                '<%= package.resources %>/js/libs/angular-route.js',
                '<%= package.resources %>/js/libs/**/*.js'
            ]
        }
    },
    controller: {
        options: {
            sourceMap:true
        },
        files: {
            '<%= package.siteName %>/<%= package.buildresources %>/js/controller.min.js': [
                '<%= package.resources %>/js/app/app.js',
                '<%= package.resources %>/js/app/route-config.js',
                '<%= package.resources %>/js/app/**/*.js'
            ]
        }
    },
    production: {
        options: {
            sourceMap:false
        },
        files:{
            '<%= package.resources%>/temp/js/core.js' : [
                '<%= package.resources %>/js/libs/angular.js',
                '<%= package.resources %>/js/libs/angular-route.js',
                '<%= package.resources %>/js/libs/angular-sanitize.js',
                '<%= package.resources %>/js/libs/angular-route.js',
                '<%= package.resources %>/js/libs/ngNotificationsBar.js'
            ],
            '<%= package.resources%>/temp/js/controller.js': [
                '<%= package.resources %>/js/app/app.js',
                '<%= package.resources %>/js/app/route-config.js',
                '<%= package.resources %>/js/app/**/*.js'
            ]
        }
    }
};