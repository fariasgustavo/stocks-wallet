import { Query, Document, UpdateQuery } from 'mongoose';

export interface RepositoryProtocol {
  create(model: any): Promise<any>;

  findAll(): Query<any[], Document<any[]>>;

  update(id: string, model: any): UpdateQuery<any>;

  remove(id: string): Query<any, Document<any>>;

  findOne(
    id: string,
  ): Promise<
    | Query<
        (Document<any, any, any> & any) | null,
        Document<any, any, any> & any,
        {},
        any
      >
    | boolean
  >;
}
