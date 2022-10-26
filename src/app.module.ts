import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [DatabaseModule, PersonModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
