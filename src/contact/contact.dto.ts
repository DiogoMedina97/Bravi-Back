import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsInt } from 'class-validator';

import { ContactEntityInterface } from './contact.interface';

class CreateUpdateDTO implements Partial<ContactEntityInterface> {
  @ApiProperty()
  @IsString()
  readonly type: string;

  @ApiProperty()
  @IsString()
  readonly value: string;
}

export class CreateDTO extends CreateUpdateDTO {}
export class UpdateDTO extends CreateUpdateDTO {
  @ApiProperty()
  @IsInt()
  readonly id: number;
}
