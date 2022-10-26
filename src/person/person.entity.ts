import { Column, Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';

@Entity('person')
export class PersonEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  surname: string;
}

export class PersonRepository extends Repository<PersonEntity> {}
