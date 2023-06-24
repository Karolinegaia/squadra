import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  username: 'system',
  password: 'oracle',
  database: 'free',
  synchronize: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
});
