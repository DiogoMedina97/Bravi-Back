import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsInt } from 'class-validator';

import { PersonEntityInterface } from './person.interface';

export class IdDTO {
  @ApiProperty()
  @IsInt()
  readonly id: number;
}

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
