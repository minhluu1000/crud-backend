import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
