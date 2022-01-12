import { src, dest, task } from 'gulp';
import * as gulp from 'gulp';
import { sourcePaths } from "../config";


const copyExtraTs = () => {
    const tsResult = gulp.src('./*ts')

}

task('copy-extras', copyExtraTs);