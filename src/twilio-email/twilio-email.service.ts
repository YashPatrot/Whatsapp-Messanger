import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from 'src/common/constants';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class TwilioEmailService {
  private readonly twilioSenderEmail: string;
  private readonly twilioReplyToEmail: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly twilioService: TwilioService,
  ) {
    //@ts-expect-error by default it is assigned a type of string | undefined
    this.twilioSenderEmail = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_EMAIL.TWILIO_SENDER_EMAIL,
    );
    //@ts-expect-error by default it is assigned a type of string | undefined
    this.twilioReplyToEmail = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_EMAIL.TWILIO_REPLY_TO_EMAIL,
    );
  }
}
