import { ICreateUser } from '../../interfaces/User';
export type IBuildCreateUser = ReturnType<typeof BuildCreateUser>;

export default function BuildCreateUser ({ generateUserId } : { generateUserId: any }) {
  return (client: ICreateUser) => {
    const { firstName, lastName, email, password } = client;
    if (!firstName || !lastName || !email) {
      throw new Error('Missing required fields');
    }

    return Object.freeze({
      getUserId: () => generateUserId(),
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getPassword: () => password
    });
  };
}
