const mix = require('laravel-mix');
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

let styles = [
	{
		'path': './redux-core/assets/scss/vendor/elusive-icons/elusive-icons.scss',
		'dest': './redux-core/assets2/css/vendor/'
	},
	{'path': './redux-core/assets/scss/vendor/select2/select2.scss', 'dest': './redux-core/assets2/css/vendor/'},
	{
		'path': './redux-core/assets/scss/vendor/jquery-ui-1.10.0.custom.scss',
		'dest': './redux-core/assets2/css/vendor/'
	},
	{'path': './redux-core/assets/scss/vendor/nouislider.scss', 'dest': './redux-core/assets2/css/vendor/'},
	{'path': './redux-core/assets/scss/vendor/qtip.scss', 'dest': './redux-core/assets2/css/vendor/'},
	{'path': './redux-core/assets/scss/vendor/spectrum.scss', 'dest': './redux-core/assets2/css/vendor/'},
	{'path': './redux-core/assets/scss/vendor/vendor.scss', 'dest': './redux-core/assets2/css/'},
	{'path': './redux-core/assets/scss/color-picker.scss', 'dest': './redux-core/assets2/css/'},
	{'path': './redux-core/assets/scss/media.scss', 'dest': './redux-core/assets2/css/'},
	{'path': './redux-core/assets/scss/redux-admin.scss', 'dest': './redux-core/assets2/css/'},
	{'path': './redux-core/assets/scss/rtl.scss', 'dest': './redux-core/assets2/css/'},
	{'path': './redux-core/inc/welcome/css/redux-welcome.scss', 'dest': './redux-core/inc2/welcome/css/'},
	{'path': './redux-core/inc/welcome/css/redux-banner.scss', 'dest': './redux-core/inc2/welcome/css/'}
];

// Core styles.
styles.map(
	function (file) {
		mix.sass(file.path, file.dest);
	}
);

// JS Vendor related.
mix.js('./redux-core/assets/js/redux-vendors.js', './redux-core/assets2/js/')
	.js('./redux-core/assets/js/redux.js', './redux-core/assets2/js/');

function getFolders(dir) {
	return fs.readdirSync(dir).filter(
		function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		}
	);
}

//
// // colors
var color_dirs = getFolders('redux-core/assets/scss/colors/');
var colors = color_dirs.map(
	function (folder) {
		var the_path = './redux-core/assets2/css/colors/' + folder + '/';
		mix.sass('./redux-core/assets/scss/colors/' + folder + '/colors.scss', the_path);
	}
);
//
// // Fields.
var field_dirs = getFolders('redux-core/inc/fields/');
var fields = field_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/fields/' + folder + '/';
		folder = folder.replace( '_', '-' );
		mix.sass( the_path + 'redux-' + folder + '.scss', the_path );
	}
);
// // // Extensions.
var extension_dirs = getFolders('redux-core/inc/extensions/');
var extensions = extension_dirs.map(
	function (folder) {
		var the_path = './redux-core/inc2/extensions/' + folder + '/';
		folder = folder.replace('_', '-');

		if (folder === 'metaboxes-lite') {
			folder = 'metaboxes';
		}
		mix.sass(the_path + 'redux-' + folder + '.scss', the_path);
		// return process_scss( the_path + 'redux-extension-' + folder + '.scss', the_path );
	}
);
// //
var extension_dirs = getFolders('redux-core/inc/extensions/');
var extension_fields = extension_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/extensions/' + folder + '/' + folder + '/';
		folder = folder.replace( '_', '-' );
		mix.sass(the_path + 'redux-' + folder + '.scss', the_path);
		// return process_scss( the_path + 'redux-' + folder + '.scss', the_path );
	}
);
// //
// // // Extensions.
var extension_dirs = getFolders( 'redux-core/inc/extensions/' );
var extensions = extension_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/extensions/' + folder + '/';
		folder = folder.replace( '_', '-' );

		if ( folder === 'metaboxes-lite' ) {
			folder = 'metaboxes';
		}

		mix.sass( the_path + 'redux-extension-' + folder + '.scss', the_path );
	}
);
//

var field_dirs = getFolders( 'redux-core/inc/extensions' );
field_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/extensions/' + folder + '/' + folder + '/';

		folder = folder.replace( '_', '-' );

		mix.js( the_path + 'redux-' + folder + '.js', the_path );
	}
);
// //
var field_dirs = getFolders( 'redux-core/inc/extensions' );
field_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/extensions/' + folder + '/';

		folder = folder.replace( '_', '-' );

		if ( folder === 'metaboxes-lite' ) {
			folder = 'metaboxes';
		}

		mix.js( the_path + 'redux-extension-' + folder + '.js', the_path );
	}
);
// //
var field_dirs = getFolders( 'redux-core/inc/fields' );
field_dirs.map(
	function( folder ) {
		var the_path = './redux-core/inc2/fields/' + folder + '/';

		folder = folder.replace( '_', '-' );

		mix.js( the_path + '/redux-' + folder + '.js', the_path );
	}
);
// //
mix.js('./redux-core/assets/js/media/media.js', './redux-core/assets2/js/media/')
	.js('./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js', './redux-core/inc2/fields/spinner/vendor/')
	.js('./redux-core/assets/js/redux/*.js', './redux-core/assets2/js/');
//
mix.combine([
	'./redux-templates/src/scss/admin.scss',
	'./redux-templates/src/scss/common.scss',
	'./redux-templates/src/scss/font-awesome.scss',
	'./redux-templates/assets/css/admin.min.css'
], './redux-templates/assets2/css/app.scss');
//

mix.combine([
	'./redux-core/assets/js/redux/ajax-save.js',
	'./redux-core/assets/js/redux/color-validate.js',
	'./redux-core/assets/js/redux/expand-options.js',
	'./redux-core/assets/js/redux/init-events.js',
	'./redux-core/assets/js/redux/init-fields.js',
	'./redux-core/assets/js/redux/main.js',
	'./redux-core/assets/js/redux/notices.js',
	'./redux-core/assets/js/redux/qtip.js',
	'./redux-core/assets/js/redux/redux-change.js',
	'./redux-core/assets/js/redux/redux-hook.js',
	'./redux-core/assets/js/redux/required.js',
	'./redux-core/assets/js/redux/sticky-info.js',
	'./redux-core/assets/js/redux/tab-check.js',
	'./redux-core/assets/js/redux.js'
], './redux-core/assets2/js/app.js');
