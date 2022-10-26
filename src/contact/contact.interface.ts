import { PersonEntityInterface } from '../person/person.interface';

export interface ContactEntityInterface {
  readonly id: number;
  readonly id_person: number;
  readonly type: string;
  readonly value: string;
  readonly person: PersonEntityInterface;
}
