import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { contactProviders } from './contact.providers';
import { ContactController } from './contact.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [...contactProviders],
})
export class ContactModule {}
