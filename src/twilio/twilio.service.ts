import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { ConfigService } from '@nestjs/config';
import { ENV_VARIABLES } from 'src/common/constants';

@Injectable()
export class TwilioService {
  private readonly twilio: Twilio;
  private readonly twilioAccountSid: string;
  private readonly twilioAuthToken: string;
  // private readonly twilioPhoneNumber: string;
  // private readonly twilioWhatsappNumber: string;
  constructor(private readonly configService: ConfigService) {
    //@ts-expect-error by default it is assigner a type of string | undefined
    this.twilioAccountSid = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_ACCESS_CREDENTIALS.TWILIO_ACCOUNT_SID,
    );

    //@ts-expect-error by default it is assigner a type of string | undefined'
    this.twilioAuthToken = this.configService.get(
      ENV_VARIABLES.TWILIO_LIVE_ACCESS_CREDENTIALS.TWILIO_AUTH_TOKEN,
    );
    // //@ts-expect-error by default it is assigner a type of string | undefined'
    // this.twilioPhoneNumber = this.configService.get(
    //   ENV_VARIABLES.TWILIO_LIVE.TWILIO_PHONE_NUMBER,
    // );
    // //@ts-expect-error by default it is assigner a type of string | undefined'
    // this.twilioWhatsappNumber = this.configService.get(
    //   ENV_VARIABLES.TWILIO_LIVE.TWILIO_WHATSAPP_NUMBER,
    // );
    this.twilio = new Twilio(this.twilioAccountSid, this.twilioAuthToken);
  }

  // async sendSms(
  //   to: string,
  //   message: string,
  // ): Promise<{ status: string; message: string; data: MessageInstance }> {
  //   const messageReponse = await this.twilio.messages.create({
  //     body: message,
  //     from: this.twilioPhoneNumber,
  //     to,
  //   });
  //   return {
  //     status: 'success',
  //     message: 'Message sent successfully',
  //     data: messageReponse,
  //   };
  // }

  // async sendWhatsappMessage(
  //   to: string,
  //   message: string,
  // ): Promise<{ status: string; message: string; data: MessageInstance }> {
  //   const messageReponse = await this.twilio.messages.create({
  //     body: message,
  //     from: `whatsapp:${this.twilioWhatsappNumber}`,
  //     to: `whatsapp:${to}`,
  //   });
  //   return {
  //     status: 'success',
  //     message: 'Whatsapp Message sent successfully',
  //     data: messageReponse,
  //   };
  // }

  // async sendContentTemplateWhatsappMessage(
  //   from: string,
  //   to: string,
  // ): Promise<{ status: string; message: string; data: MessageInstance }> {
  //   const messageReponse = await this.twilio.messages.create({
  //     from: `whatsapp:${this.twilioWhatsappNumber}`,
  //     to: `whatsapp:${to}`,
  //     contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e',
  //     contentVariables: '{"1":"26/03","2":"5pm"}',
  //   });
  //   console.log(messageReponse);
  //   return {
  //     status: 'success',
  //     message: 'Whatsapp Message sent successfully',
  //     data: messageReponse,
  //   };
  // }

  // async makeCall(
  //   from: string | undefined,
  //   to: string,
  // ): Promise<{ status: string; message: string; data: CallInstance }> {
  //   const call = await this.twilio.calls.create({
  //     from: from,
  //     to: to,
  //     url: 'http://demo.twilio.com/docs/voice.xml',
  //     record: true,
  //   });
  //   console.log('call', call);
  //   return {
  //     status: 'success',
  //     message: 'Call initiated successfully',
  //     data: call,
  //   };
  // }
}
