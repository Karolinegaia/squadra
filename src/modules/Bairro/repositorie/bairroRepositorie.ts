import { AppDataSource } from '@shared/typeorm/index';
import Bairro from '../entities/Bairro';

export const BairroRepository = AppDataSource.getRepository(Bairro);
