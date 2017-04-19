module.exports = {
	development: {
		files: [{
			//Fonts
			expand: true,
			cwd: '<%= package.resources %>/fonts/',
			src: '**',
			dest: '<%= package.siteName %>/<%= package.buildresources %>/fonts'
		}, {
			//Images
			expand: true,
			cwd: '<%= package.resources %>/images/',
			src: ['**/*.{png,jpg,gif,svg}', '!temporary/**'],
			dest: '<%= package.siteName %>/<%= package.buildresources %>/images'

		}, {
			//HTML
			expand: true,
			cwd: '<%= package.resources %>/js/app/',
			src: ['**/*.html'],
			dest: '<%= package.siteName %>/<%= package.buildresources %>/html'

		}, {
			//Server files
			expand: true,
			cwd: '<%= package.server %>',
			src: '**',
			dest: '<%= package.siteName %>/<%= package.root %>'
		}]
	},
	production: {
		files: [{
			//Fonts
			expand: true,
			cwd: '<%= package.resources %>/fonts/',
			src: '**',
			dest: '<%= package.buildresources %>/fonts'
		}, {
			//Images
			expand: true,
			cwd: '<%= package.resources %>/images/',
			src: ['**/*.svg', '!temporary/**'],
			dest: '<%= package.buildresources %>/images'

		}, {
			//HTML
			expand: true,
			cwd: '<%= package.resources %>/js/app/',
			src: ['**/*.html'],
			dest: '<%= package.buildresources %>/html'

		}, {
			//Server files
			expand: true,
			cwd: '<%= package.server %>',
			src: '**',
			dest: '<%= package.root %>'
		}]
	}

};