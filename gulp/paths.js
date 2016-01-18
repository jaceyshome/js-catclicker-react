var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
    root: appRoot,
    source: [
        // The use of the glob pattern here is to trick gulp into treating "assets" and "js-legacy" as part of the
        // destination path, rather than the source path (e.g. copy from src/* to dist/* rather than src/assets/* to dist/*).
        appRoot + '@(components|js)/**/*.js'
    ],
    sass: appRoot + '**/*.scss',
    assets: [
        appRoot + '**/*.css',
        appRoot + '**/*.html',
        // Same as with the above glob pattern in "source"
        appRoot + '@(assets|js-legacy)/**/*'
    ],
    yaml: appRoot + '**/*.yml',
    sassIncludes: ['jspm_packages/npm/compass-mixins@0.12.7/lib/', 'src/components'],
    output: outputRoot
};
