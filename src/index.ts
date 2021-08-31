import { SetupServer } from './server';
import * as dotenv from 'dotenv';
import { MongodbConnection } from './infra/mongodb-connection.infra';
import { DatabaseConnection } from './infra/protocols/database-connection.protocol';

dotenv.config();

class Bootstrap {
  static async init(): Promise<void> {
    const database: DatabaseConnection = new MongodbConnection();
    const server: SetupServer = new SetupServer(database);

    await server.init();
    server.start();
  }
}

Bootstrap.init();
