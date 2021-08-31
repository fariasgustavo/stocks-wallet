import { createUserRepository } from '../../repositories/factories/user.repository.factory';
import { UserService } from '../user.service';

export const createUserService = (): UserService => {
  const repository = createUserRepository();
  const service = new UserService(repository);

  return service;
};
