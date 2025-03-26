import { Module } from '@nestjs/common';
import { TwilioSmsService } from './twilio-sms.service';
import { TwilioSmsController } from './twilio-sms.controller';

@Module({
  providers: [TwilioSmsService],
  controllers: [TwilioSmsController],
})
export class TwilioSmsModule {}
