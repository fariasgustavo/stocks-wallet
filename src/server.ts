import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import './util/module.alias';

export class SetupServer extends Server {
  constructor(private port = 8000) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  public getApp(): Application {
    return this.app;
  }
}
