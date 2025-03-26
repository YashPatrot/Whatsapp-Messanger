import { Module } from '@nestjs/common';
import { TwilioEmailService } from './twilio-email.service';
import { TwilioEmailController } from './twilio-email.controller';

@Module({
  providers: [TwilioEmailService],
  controllers: [TwilioEmailController],
})
export class TwilioEmailModule {}
