import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './items/items.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/items.module';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}