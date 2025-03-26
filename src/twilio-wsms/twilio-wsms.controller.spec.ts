import { Test, TestingModule } from '@nestjs/testing';
import { TwilioWsmsController } from './twilio-wsms.controller';

describe('TwilioWsmsController', () => {
  let controller: TwilioWsmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwilioWsmsController],
    }).compile();

    controller = module.get<TwilioWsmsController>(TwilioWsmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
