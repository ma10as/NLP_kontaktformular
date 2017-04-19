module.exports = {
    development: {
        script: '<%= package.siteName %>/bin/www',
        ignore: ['node_modules/**','buildscripts/**','public/**', 'src-files/**'],
    },
    debug: {
        script: '<%= package.siteName %>/bin/www',
        ignore: ['node_modules/**','buildscripts/**','public/**', 'src-files/**'],
        options:{
        	nodeArgs: ['--debug'],
        }
    },
    debugbrk: {
        script: '<%= package.siteName %>/bin/www',
        ignore: ['node_modules/**','buildscripts/**','public/**', 'src-files/**'],
        options:{
        	nodeArgs: ['--debug-brk'],
        }
    }
};