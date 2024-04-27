import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

export class HttpServer {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
  }

  public setupRoutes(routeCallback: SetupRoutes): void {
    this.app = routeCallback(this.app);
  }

  private setupErrorHandling(): void {
    this.app.use((err: Error, req: Request, res: Response) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
    });
  }

  public start(port: number, cb: (port: number) => void): void {
    this.app.listen(port, () => cb(port));
  }
}

type SetupRoutes = (app: Express) => Express;
