import BuildCreateUser from './user';
import userId from '../utils/userId';

const MakeClient = BuildCreateUser({ generateUserId: userId.generateUserId });

export { MakeClient };
