import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/items.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/items.module';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Minh@39736689',
      database: 'test',
      entities: [Item],
      migrations: ['migrations/CRUD.ts'],
      synchronize: false,
    }),
  ],
})
export class AppModule {}