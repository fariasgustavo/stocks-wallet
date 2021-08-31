import { createHobbyRepository } from '../../repositories/factories/hobby.repository.factory';
import { HobbyService } from '../hobby.service';

export const createHobbyService = (): HobbyService => {
  const repository = createHobbyRepository();
  const service = new HobbyService(repository);

  return service;
};
