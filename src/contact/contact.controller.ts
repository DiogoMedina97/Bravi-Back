import { Controller, Get } from '@nestjs/common';

@Controller('contact')
export class ContactController {
  @Get('')
  find() {
    return {};
  }
}
