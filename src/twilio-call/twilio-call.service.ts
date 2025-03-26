import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from 'src/common/constants';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class TwilioCallService {
  private readonly twilioPhoneNumber: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly twilioService: TwilioService,
  ) {
    //@ts-expect-error by default it is assigner a type of string | undefined
    this.twilioPhoneNumber = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_SMS.TWILIO_PHONE_NUMBER,
    );
  }
}
