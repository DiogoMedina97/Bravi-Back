import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

import { IdDTO, CreateDTO } from './person.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('')
  async findById(@Param() { id }: IdDTO) {
    const person = await this.personService.findById(id);
    return person;
  }

  @Post('')
  async create(@Body() body: CreateDTO) {
    const person = await this.personService.create(body);
    return person;
  }

  @Patch(':id')
  async update(@Param() { id }: IdDTO, @Body() body: CreateDTO) {
    const person = await this.personService.update(id, body);
    return person;
  }

  @Delete(':id')
  async remove(@Param() { id }: IdDTO) {
    return this.personService.remove(id);
  }
}
