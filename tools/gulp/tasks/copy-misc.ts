import { src, task } from 'gulp';

const copyExtraTs = (done:any) => {
  src('./*ts');
  return done();
};

task('copy-extras', copyExtraTs);
