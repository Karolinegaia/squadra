import 'reflect-metadata';
import { app } from './app';
import { AppDataSource } from '@shared/typeorm';

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Servidor rodando na porta 3000');
  });
});
