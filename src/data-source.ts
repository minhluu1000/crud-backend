import { DataSource } from 'typeorm';
import { Item } from './items/items.entity'; 

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Minh@39736689',
  database: 'test',
  entities: [Item],
  migrations: ['migrations/CRUD.ts'],
});
