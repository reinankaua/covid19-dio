import gulp from 'gulp';
import path from 'path';
import swPrecache from 'sw-precache';
const rootDir = '/';
gulp.task('generate-service-worker', callback => {
    swPrecache.write(path.join(rootDir, 'sw.js'), {
        staticFileGlobs: [
            // rastreia e armazena em cache todos os arquivos que correspondem a esse padrão
            rootDir + '/**/*.{js,html,css,png,jpg,gif}',
        ],
        stripPrefix: rootDir
    }, callback);
});