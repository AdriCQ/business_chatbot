import { JsonFileDB } from '@builderbot/database-json';
/**
 * WhatsappDatabase
 */
export class WhatsappDatabase {
  /**
   * PostgreSQLAdapter
   */
  private db: JsonFileDB;

  constructor(filename: string) {
    this.db = new JsonFileDB({ filename: `/bot_data/${filename}` });
  }

  /**
   * getDatabase
   * @returns
   */
  getDatabase(): JsonFileDB {
    return this.db;
  }
}
