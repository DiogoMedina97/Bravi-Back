import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { PersonEntityInterface } from './person.interface';

class CreateUpdateDTO implements Partial<PersonEntityInterface> {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly surname: string;
}

export class CreateDTO extends CreateUpdateDTO {}
export class UpdateDTO extends CreateUpdateDTO {}
