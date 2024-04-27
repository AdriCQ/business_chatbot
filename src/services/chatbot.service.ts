import { Chatbot } from '@/models';
import { DataSource } from 'typeorm';

/**
 * BotService
 */
export class BotService {
  constructor(private dataSource: DataSource) {}

  query() {
    return this.dataSource.getRepository(Chatbot);
  }

  /**
   * all
   * @returns
   */
  async all(): Promise<Chatbot[]> {
    return this.query().find();
  }

  /**
   * available
   * @returns
   */
  async findAvailable(): Promise<Chatbot[]> {
    return this.query().find({ where: { available: true } });
  }

  /**
   * findOne
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<Chatbot> {
    return this.query().findOneBy({ id });
  }
}
