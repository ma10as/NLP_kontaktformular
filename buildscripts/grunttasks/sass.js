module.exports = {
    development: {
        options:{
            sourceMap: true,
            outputStyle: 'nested',
            imagePath: '<%= package.buildresources %>/images'
        },
        files: {
            '<%= package.siteName %>/<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.sass'
        }
    },
    production: {
        options:{
            sourceMap: false,
            outputStyle: 'compressed',
            imagePath: '<%= package.buildresources %>/images'
        },
        files: {
            '<%= package.buildresources %>/css/styles.css': '<%= package.resources %>/sass/styles.sass'
        }
    }

};
