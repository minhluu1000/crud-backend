import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ItemService } from './items.service';
import { Item } from './items.entity';
import { CreateItemDto } from './dto/create-dto';
import { UpdateItemDto } from './dto/update-dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.itemService.remove(+id);
  }
}
