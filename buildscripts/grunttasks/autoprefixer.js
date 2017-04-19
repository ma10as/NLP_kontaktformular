module.exports = {
    options: {
      browsers: ['last 2 versions', 'ie 10']
    },
    development: {
        src: '<%= package.siteName %>/<%= package.buildresources %>/css/styles.css'
    },
    production: {
        src: '<%= package.buildresources %>/css/styles.css'
    }
  }
