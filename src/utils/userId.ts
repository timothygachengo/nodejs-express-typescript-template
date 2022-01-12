import IdGenerator from './base';

class UserId extends IdGenerator {
  public generateUserId = () => {
    return this.generateId(25, 40);
  }
}

export default new UserId();
