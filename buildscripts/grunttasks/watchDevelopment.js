module.exports = function(grunt) {
    grunt.registerTask('watchDevelopment', function() {
        // Configuration for watch:development tasks.
        var config = {
            images: {
                files: ['<%= package.resources %>/images/**/*.{png,jpg,gif,svg}'],
                tasks: ['newer:copy:development'],
                options: {
                    livereload: true
                }
            },

            scss: {
                files: ['<%= package.resources %>/sass/**/*.sass'],
                tasks: ['sass:development', 'autoprefixer:development', 'clean:temp'],
                options: {
                    livereload: true
                }
            },

            fonts: {
                files: ['<%= package.resources %>/fonts/**'],
                tasks: ['newer:copy:development'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['<%= package.resources %>/js/app/**/*.html'],
                tasks: ['newer:copy:development'],
                options: {
                    livereload: true
                }
            },

            controller:{
                files: ['<%= package.resources %>/js/app/**/*.js'],
                tasks: ['newer:concat:controller', 'clean:temp'],
                options: {
                    livereload: true
                }
            },

            server:{
                files: ['<%= package.server %>/**'],
                tasks: ['newer:copy:development'],
                options: {
                    livereload: true
                }
            }
        };

        grunt.config('watch', config);
        grunt.task.run('watch');
    });
};