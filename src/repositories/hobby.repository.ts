import { Model, UpdateQuery, Query, Document } from 'mongoose';
import { Hobby } from '../models/entities/hobby.entity';
import { HobbyModelDTO } from '../models/dtos/repositories-model.dto';
import { RepositoryProtocol } from './protocols/repository.protocol';

export class HobbyRepository implements RepositoryProtocol {
  private hobbyEntity: Model<Hobby>;

  constructor(hobby: Model<Hobby>) {
    this.hobbyEntity = hobby;
  }

  create(model: HobbyModelDTO | HobbyModelDTO[]): Promise<Hobby> {
    return this.hobbyEntity.create(model);
  }

  findAll(): any {
    return this.hobbyEntity.find();
  }

  update(hobbyId: string, model: HobbyModelDTO): UpdateQuery<Hobby> {
    return this.hobbyEntity.findOneAndUpdate({ _id: hobbyId }, model);
  }

  remove(hobbyId: string): Query<any, Document<Hobby>> {
    return this.hobbyEntity.deleteOne({ _id: hobbyId });
  }

  async findOne(
    hobbyId: string,
  ): Promise<
    | Query<
        (Document<any, any, Hobby> & Hobby) | null,
        Document<any, any, Hobby> & Hobby,
        {},
        Hobby
      >
    | boolean
  > {
    try {
      const hobby = await this.hobbyEntity.findById(hobbyId);

      return hobby;
    } catch (error) {
      return false;
    }
  }
}
