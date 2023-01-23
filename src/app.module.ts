import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'gmail',
        auth: {
          user: 'getster.tech.developer@gmail.com',
          pass: 'Getster.tech@587',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
