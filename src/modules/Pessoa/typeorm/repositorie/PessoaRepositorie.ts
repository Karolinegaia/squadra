import { AppDataSource } from '@shared/typeorm/index';
import Pessoa from '../entities/Pessoa';

export const pessoaRepository = AppDataSource.getRepository(Pessoa);
