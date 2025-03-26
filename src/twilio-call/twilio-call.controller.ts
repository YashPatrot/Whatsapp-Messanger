import { Controller } from '@nestjs/common';
import { TwilioCallService } from './twilio-call.service';

@Controller('twilio-call')
export class TwilioCallController {
  constructor(private readonly twilioCallService: TwilioCallService) {}
}
