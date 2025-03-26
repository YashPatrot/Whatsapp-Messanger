import { Module } from '@nestjs/common';
import { TwilioCallService } from './twilio-call.service';
import { TwilioCallController } from './twilio-call.controller';

@Module({
  providers: [TwilioCallService],
  controllers: [TwilioCallController],
})
export class TwilioCallModule {}
