import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Node Mailer email')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mailService: MailerService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('plain-text-email')
  async plainTextEmail(@Query('toemail') toEmail: string) {
    var response = await this.mailService.sendMail({
      to: toEmail,
      from: 'sudhagar.m@getster.tech',
      subject: 'from Nodemailer',
      text: 'Hi there',
    });
    return response;
  }
}
