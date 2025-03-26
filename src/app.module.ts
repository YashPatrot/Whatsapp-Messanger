import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TwilioModule } from './twilio/twilio.module';
import { ConfigModule } from '@nestjs/config';
import { TwilioCallModule } from './twilio-call/twilio-call.module';
import { TwilioSmsModule } from './twilio-sms/twilio-sms.module';
import { TwilioEmailModule } from './twilio-email/twilio-email.module';
import { TwilioWsmsModule } from './twilio-wsms/twilio-wsms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    TwilioModule,
    TwilioCallModule,
    TwilioSmsModule,
    TwilioEmailModule,
    TwilioWsmsModule,
  ],
})
export class AppModule {}
