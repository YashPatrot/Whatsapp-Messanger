import { Module } from '@nestjs/common';
import { TwilioWsmsController } from './twilio-wsms.controller';
import { TwilioWsmsService } from './twilio-wsms.service';

@Module({
  controllers: [TwilioWsmsController],
  providers: [TwilioWsmsService],
})
export class TwilioWsmsModule {}
