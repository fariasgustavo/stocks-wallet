import { createHobbyService } from '../../services/factories/hobby.service.factory';
import { HobbyController } from '../hobby.controller';

export const createHobbyController = (): HobbyController => {
  const service = createHobbyService();
  const controller = new HobbyController(service);

  return controller;
};
