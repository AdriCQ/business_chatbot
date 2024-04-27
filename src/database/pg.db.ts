import { Chatbot } from '@/models';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export class AppDatabase {
  private dataSource: DataSource;

  constructor(options: DataSourceParams) {
    this.dataSource = new DataSource({
      ...options,
      type: 'postgres',
      entities: [Chatbot],
      synchronize: true,
    });
  }

  getDataSource() {
    return this.dataSource;
  }

  init() {
    return this.dataSource.initialize();
  }
}

interface DataSourceParams {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
