import { Injectable, Inject } from '@nestjs/common';

import { CreateDTO, UpdateDTO } from './person.dto';
import { PersonEntity, PersonRepository } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private readonly personRepository: PersonRepository,
  ) {}

  async create(dto: CreateDTO) {
    const person = new PersonEntity(dto);
    const saved = await this.personRepository.save(person);
    return saved;
  }

  async update(id: number, dto: UpdateDTO) {
    const person = await this.personRepository.findOne({ where: { id } });
    if (!person) return undefined;

    person.update(dto);
    const updated = await this.personRepository.save(person);

    return updated;
  }

  async remove(id: number) {
    const person = await this.personRepository.findOne({ where: { id } });
    if (!person) return false;

    await this.personRepository.delete(id);

    return true;
  }
}
