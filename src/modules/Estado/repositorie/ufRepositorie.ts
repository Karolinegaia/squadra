import { AppDataSource } from '@shared/typeorm/index';
import Uf from '../entities/Uf';

export const UfRepository = AppDataSource.getRepository(Uf);
