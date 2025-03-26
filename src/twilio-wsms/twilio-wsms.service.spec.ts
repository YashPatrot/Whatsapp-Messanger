import { Test, TestingModule } from '@nestjs/testing';
import { TwilioWsmsService } from './twilio-wsms.service';

describe('TwilioWsmsService', () => {
  let service: TwilioWsmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioWsmsService],
    }).compile();

    service = module.get<TwilioWsmsService>(TwilioWsmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
