import { Column, Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';

import { PersonEntityInterface } from './person.interface';

@Entity('person')
export class PersonEntity implements PersonEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  surname: string;
}

export class PersonRepository extends Repository<PersonEntity> {}
