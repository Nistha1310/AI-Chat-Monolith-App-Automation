import dotenv from 'dotenv';
import { qaConfig } from './qa.config';

// Ensure environment variables are loaded
dotenv.config();

export class ConfigManager {
  /**
  * Gets the base URL for the application under test[cite: 2].
  */
  public static getBaseUrl(): string {
    return process.env.BASE_URL || qaConfig.baseUrl;
  }

  /**
  * Gets the SSO username for authentication[cite: 2].
  */
  public static getSsoUsername(): string {
    if (!process.env.SSO_USERNAME) {
      throw new Error('SSO_USERNAME is not defined in the environment variables or .env file.');
    }
    return process.env.SSO_USERNAME;
  }

  /**
  * Gets the SSO password for authentication[cite: 2].
  */
  public static getSsoPassword(): string {
    if (!process.env.SSO_PASSWORD) {
      throw new Error('SSO_PASSWORD is not defined in the environment variables or .env file.');
    }
    return process.env.SSO_PASSWORD;
  }

  /**
  * Gets the global test timeout configuration.
  */
  public static getTimeout(): number {
    return qaConfig.timeout;
  }
}