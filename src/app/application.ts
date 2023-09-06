import helmet from 'helmet';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import express from 'express';
import compression from 'compression';
import morgan from 'morgan';

import Routes from '../infra/http/routes/routes';

import {
  BODY_PARSER_LIMIT,
  MORGAN_FORMAT,
} from '../shared/constants/app.constants';

export class Application {
  public express!: express.Application;

  public constructor() {
    this.initialize();
  }

  protected initialize(): void {
    this.express = express();
    this.express.use(cors({ origin: '*' }));
    this.express.use(
      helmet({
        crossOriginResourcePolicy: false,
      })
    );
    this.express.use(compression());
    this.express.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.express.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.express.use(morgan(MORGAN_FORMAT));
    this.express.use(Routes);
  }
}

export default new Application().express;
