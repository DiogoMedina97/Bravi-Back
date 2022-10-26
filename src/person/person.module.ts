import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { personProviders } from './person.providers';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [...personProviders, PersonService],
})
export class PersonModule {}
