import { Service } from 'typedi';
import BaseLogger from './base';

@Service()
class LoggerClass extends BaseLogger {
  public usersActivityInfo = (message: string, ...args: any[]) => this.logger('./logs/activity_users.json').info(message, ...args);

  public usersActivityError = (message: string, ...args: any[]) => this.logger('./logs/activity_users.json').error(message.toUpperCase(), ...args);

  public databaseActivityInfo = (message: string, ...args: any[]) => this.logger('./logs/activity_database.json').info(message, ...args);

  public databaseActivityError = (message: string, ...args: any[]) => this.logger('./logs/activity_database.json').error(message.toUpperCase(), ...args);

  public apiLog = (message: string, ...args: any[]) => this.logger('./logs/activity_api.json').info(message, ...args);
  
  public handleAppErrors = (message: string, processExit: boolean, ...args: any[]) => {
    const logger = this.logger('./logs/APP_ERRORS.json');
    logger.error(message.toUpperCase(), ...args);
    if (processExit) {
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
}

export default LoggerClass;
