import { Test, TestingModule } from '@nestjs/testing';
import { TwilioEmailService } from './twilio-email.service';

describe('TwilioEmailService', () => {
  let service: TwilioEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioEmailService],
    }).compile();

    service = module.get<TwilioEmailService>(TwilioEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
