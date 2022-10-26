import { ContactEntityInterface } from '../contact/contact.interface';

export interface PersonEntityInterface {
  readonly id: number;
  readonly name: string;
  readonly surname: string;
  readonly contacts: ContactEntityInterface[];
}
