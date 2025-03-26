import { Test, TestingModule } from '@nestjs/testing';
import { TwilioCallController } from './twilio-call.controller';

describe('TwilioCallController', () => {
  let controller: TwilioCallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwilioCallController],
    }).compile();

    controller = module.get<TwilioCallController>(TwilioCallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
