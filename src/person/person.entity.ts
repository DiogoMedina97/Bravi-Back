import { Column, Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';

import { CreateDTO, UpdateDTO } from './person.dto';
import { PersonEntityInterface } from './person.interface';

@Entity('person')
export class PersonEntity implements PersonEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  surname: string;

  constructor(dto: CreateDTO) {
    if (!dto) return;
    const keys = Object.keys(dto);
    for (const key of keys) {
      const value = dto[key];
      if (value !== undefined) this[key] = value;
    }
  }

  update(dto: UpdateDTO) {
    if (!dto) return;
    const keys = Object.keys(dto);
    for (const key of keys) {
      const value = dto[key];
      if (value !== undefined) this[key] = value;
    }
  }
}

export class PersonRepository extends Repository<PersonEntity> {}
