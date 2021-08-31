import { Model, UpdateQuery, Query, Document } from 'mongoose';
import { User } from '../models/entities/user.entity';
import { UserModelDTO } from '../models/dtos/repositories-model.dto';
import { RepositoryProtocol } from './protocols/repository.protocol';

export class UserRepository implements RepositoryProtocol {
  private userEntity: Model<User>;

  constructor(user: Model<User>) {
    this.userEntity = user;
  }

  create(model: UserModelDTO): Promise<User> {
    return this.userEntity.create(model);
  }

  findAll(): Query<User[], Document<User[]>> {
    return this.userEntity.find();
  }

  update(userId: string, model: UserModelDTO): UpdateQuery<User> {
    return this.userEntity.findOneAndUpdate({ _id: userId }, model);
  }

  remove(userId: string): Query<any, Document<User>> {
    return this.userEntity.deleteOne({ _id: userId });
  }

  async findOne(
    userId: string,
  ): Promise<
    | Query<
        (Document<any, any, User> & User) | null,
        Document<any, any, User> & User,
        {},
        User
      >
    | boolean
  > {
    try {
      const user = await this.userEntity.findById(userId);
      return user;
    } catch (error) {
      return false;
    }
  }
}
