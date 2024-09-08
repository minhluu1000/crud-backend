import { DataSource } from 'typeorm';
import { Item } from './items/items.entity'; 

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', // Change your MySQL account username
  password: 'Minh@39736689',  // Change your MySQL account password
  database: 'test1',
  entities: [Item],
  migrations: ['migrations/*.ts'],
});
