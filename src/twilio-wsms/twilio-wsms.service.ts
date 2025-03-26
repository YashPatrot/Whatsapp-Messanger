import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from 'src/common/constants';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class TwilioWsmsService {
  private readonly twilioWhatsappNumber: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly twilioService: TwilioService,
  ) {
    //@ts-expect-error by default it is assigner a type of string | undefined
    this.twilioWhatsappNumber = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_WHATSAPP.TWILIO_WHATSAPP_NUMBER,
    );
  }
}
