import Bairro from '@modules/Bairro/entities/Bairro';
import Endereco from '@modules/Endereco/typeorm/entities/Endereco';
import Uf from '@modules/Estado/typeorm/entities/Uf';
import Municipio from '@modules/Municipio/typeorm/entities/Municipio';
import Pessoa from '@modules/Pessoa/typeorm/entities/Pessoa';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  username: 'system',
  password: 'oracle',
  database: 'free',
  synchronize: true,
  logging: false,
  entities: [Bairro, Endereco, Uf, Municipio, Pessoa],
  subscribers: [],
  migrations: [],
});
