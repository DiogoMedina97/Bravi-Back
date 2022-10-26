import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
  OneToMany,
} from 'typeorm';

import { CreateDTO, UpdateDTO } from './person.dto';
import { PersonEntityInterface } from './person.interface';

import { ContactEntity } from '../contact/contact.entity';

@Entity('person')
export class PersonEntity implements PersonEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  surname: string;

  @OneToMany(() => ContactEntity, (contact) => contact.person, {
    cascade: ['insert', 'update', 'remove'],
  })
  contacts: ContactEntity[];

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
