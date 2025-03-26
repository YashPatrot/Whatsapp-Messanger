import { Test, TestingModule } from '@nestjs/testing';
import { TwilioCallService } from './twilio-call.service';

describe('TwilioCallService', () => {
  let service: TwilioCallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioCallService],
    }).compile();

    service = module.get<TwilioCallService>(TwilioCallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
