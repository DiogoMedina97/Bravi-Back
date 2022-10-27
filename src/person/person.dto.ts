import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsInt, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { PersonEntityInterface } from './person.interface';

import {
  CreateDTO as ContactCreateDTO,
  UpdateDTO as ContactUpdateDTO,
} from '../contact/contact.dto';

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

export class CreateDTO extends CreateUpdateDTO {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactCreateDTO)
  readonly contacts: ContactCreateDTO[];
}

export class UpdateDTO extends CreateUpdateDTO {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactUpdateDTO)
  readonly contacts: ContactUpdateDTO[];
}
