import { task } from 'gulp';
import * as shelljs from 'shelljs';

const build = (done: any) => {
    shelljs.exec('tsc')
    return done();
}

task('build', build);