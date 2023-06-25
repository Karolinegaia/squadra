import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './rotas';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        messagem: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      messagem: 'Internal Server error',
    });
  },
);
export { app };
