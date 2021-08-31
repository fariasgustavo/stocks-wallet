import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Application } from 'express';
import * as http from 'http';
import { createHobbyController } from './controllers/factories/hobby.controller.factory';
import { createUserController } from './controllers/factories/user.controller.factory';
import { DatabaseConnection } from './infra/protocols/database-connection.protocol';

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(private database: DatabaseConnection, private port = 8000) {
    super();
  }

  public async init(): Promise<void> {
    await this.setupDatabase();
    this.setupExpress();
    this.setupControllers();
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }

  public getApp(): Application {
    return this.app;
  }

  public async close(): Promise<void> {
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close(err => {
          if (err) {
            return reject(err);
          }
          resolve(true);
        });
      });
    }
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: '*',
      }),
    );
  }

  private setupControllers(): void {
    const userController = createUserController();
    const hobbyController = createHobbyController();

    this.addControllers([userController, hobbyController]);
  }

  private async setupDatabase(): Promise<void> {
    await this.database.connect();
  }
}
