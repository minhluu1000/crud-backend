import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';
import { CreateItemDto } from './dto/create-dto';
import { UpdateItemDto } from './dto/update-dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemRepository.create(createItemDto);
    return await this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    await this.itemRepository.update(id, updateItemDto);
    return this.itemRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
