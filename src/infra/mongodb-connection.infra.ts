import { DatabaseConnection } from './protocols/database-connection.protocol';
import { connect as mongobdConnection } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export class MongodbConnection implements DatabaseConnection {
  private connectionParams: string;

  constructor(connectionString = '') {
    this.connectionParams = connectionString
      ? connectionString
      : `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`;
  }

  async connect(): Promise<void> {
    await mongobdConnection(this.connectionParams);
  }
}
