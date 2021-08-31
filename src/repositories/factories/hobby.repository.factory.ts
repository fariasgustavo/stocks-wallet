import { Hobby, hobby } from '../../models/entities/hobby.entity';
import { Model } from 'mongoose';
import { HobbyRepository } from '../hobby.repository';
import { RepositoryProtocol } from '../protocols/repository.protocol';

export const createHobbyRepository = (): RepositoryProtocol => {
  const entity: Model<Hobby> = hobby;
  const repository = new HobbyRepository(entity);

  return repository;
};
