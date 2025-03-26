import { Controller } from '@nestjs/common';
import { TwilioWsmsService } from './twilio-wsms.service';

@Controller('twilio-wsms')
export class TwilioWsmsController {
  constructor(private readonly twilioWsmsService: TwilioWsmsService) {}
}
