import { Test, TestingModule } from '@nestjs/testing';
import { TwilioEmailController } from './twilio-email.controller';

describe('TwilioEmailController', () => {
  let controller: TwilioEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwilioEmailController],
    }).compile();

    controller = module.get<TwilioEmailController>(TwilioEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
