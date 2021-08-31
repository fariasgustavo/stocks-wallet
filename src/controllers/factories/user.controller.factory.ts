import { createUserService } from '../../services/factories/user.service.factory';
import { UserController } from '../user.controller';

export const createUserController = (): UserController => {
  const service = createUserService();
  const controller = new UserController(service);

  return controller;
};
