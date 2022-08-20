/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const projectDir = __dirname;
const tsconfigPath = path.join(projectDir, 'tools/gulp/tsconfig.json');
const tsProject = ts.createProject('tsconfig.json', { declaration: true, declarationFiles: true });
gulp.task('config-scripts', () => {
  const tscResult = gulp.src(['node.config.ts', 'knexfile.ts']).pipe(tsProject());
  return tscResult.js
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('build'));
});

require('ts-node').register({
  project: tsconfigPath
});

require('./tools/gulp/gulpfile');