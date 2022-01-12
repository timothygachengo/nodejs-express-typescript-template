import { createHash } from 'crypto';

class IdGenerator {
  protected charset: string;

  constructor (charset?: string) {
    this.charset = charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }

  private generateRandomString = (strLen: number) :string => {
    let randomStr = '';
    for (let i = 0; i < strLen; i++) {
      const randomPos = Math.floor(Math.random() * this.charset.length);
      randomStr += this.charset.substring(randomPos, randomPos + 1);
    }
    return randomStr;
  }

  protected generateId = (idLength: number, randomStrLen: number) => {
    const randomStr = this.generateRandomString(randomStrLen) + Date.now().toString();
    const hash = createHash('sha256').update(randomStr).digest('hex').toString();
    return hash.substring(0, idLength);
  }
}

export default IdGenerator;