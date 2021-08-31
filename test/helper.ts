import { MongodbConnection } from '../src/infra/mongodb-connection.infra';
import { DatabaseConnection } from '../src/infra/protocols/database-connection.protocol';
import { SetupServer } from '../src/server';
import supertest from 'supertest';

export async function setupTestServer(): Promise<void> {
  const database: DatabaseConnection = new MongodbConnection(
    'mongodb://localhost:27018/UserHobbiesTest',
  );
  const server = new SetupServer(database);
  await server.init();

  global.testRequest = supertest(server.getApp());
}
