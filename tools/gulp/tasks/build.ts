import { task, dest, src } from 'gulp';
import ts from 'gulp-typescript';
import alias from 'gulp-ts-alias';
import shelljs from 'shelljs';
import sourcemaps from 'gulp-sourcemaps';

const tscProject = ts.createProject('tsconfig.json');

const build = () => {
  const compiled = src('src/**/*.ts')
    .pipe(alias(tscProject.config.compilerOptions))
    .pipe(sourcemaps.init())
    .pipe(tscProject());

    shelljs.cp('-R', 'prisma', 'build/prisma');

  return compiled.js
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/src'));
};

task('build', build);
