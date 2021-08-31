import { user, User } from '../../models/entities/user.entity';
import { Model } from 'mongoose';
import { RepositoryProtocol } from '../protocols/repository.protocol';
import { UserRepository } from '../user.repository';

export const createUserRepository = (): RepositoryProtocol => {
  const entity: Model<User> = user;
  const repository = new UserRepository(entity);

  return repository;
};
