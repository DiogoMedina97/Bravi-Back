import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { ContactEntityInterface } from './contact.interface';

import { PersonEntity } from '../person/person.entity';

@Entity('contact')
export class ContactEntity implements ContactEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;

  @ManyToOne(() => PersonEntity, (person) => person.contacts)
  @JoinColumn({ name: 'id_person' })
  person: PersonEntity;
}

export class ContactRepository extends Repository<ContactEntity> {}
