import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { contactProviders } from './contact.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...contactProviders],
})
export class ContactModule {}
