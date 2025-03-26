import { Controller } from '@nestjs/common';
import { TwilioEmailService } from './twilio-email.service';

@Controller('twilio-email')
export class TwilioEmailController {
  constructor(private readonly twilioEmailService: TwilioEmailService) {}
}
