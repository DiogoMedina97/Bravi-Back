import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsInt } from 'class-validator';

import { ContactEntityInterface } from './contact.interface';

export class IdDTO {
  @ApiProperty()
  @IsInt()
  readonly id: number;
}

class CreateUpdateDTO implements Partial<ContactEntityInterface> {
  @ApiProperty()
  @IsInt()
  readonly id_person: number;

  @ApiProperty()
  @IsString()
  readonly type: string;

  @ApiProperty()
  @IsString()
  readonly value: string;
}

export class CreateDTO extends CreateUpdateDTO {}
export class UpdateDTO extends CreateUpdateDTO {}
