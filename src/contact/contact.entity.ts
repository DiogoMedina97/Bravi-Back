import { Column, Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';

import { ContactEntityInterface } from './contact.interface';

@Entity('contact')
export class ContactEntity implements ContactEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  id_person: number;

  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;
}

export class ContactRepository extends Repository<ContactEntity> {}
