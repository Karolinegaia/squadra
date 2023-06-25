import AppError from '@shared/errors/AppError';
import { BairroRepository } from '../repositorie/bairroRepositorie';
import { AppDataSource } from '@shared/typeorm';
import Bairro from '../entities/Bairro';

interface IRequest {
  codigoBairro: number;
  codigoMunicipio: number;
  nome: string;
  status: number;
}

class CriarBairro {
  static execute() {
    throw new Error('Method not implemented.');
  }
  public async execute({
    codigoBairro,
    codigoMunicipio,
    nome,
    status,
  }: IRequest) {
    const bairrosRepository = AppDataSource.getRepository(Bairro);
    const bairroExists = await BairroRepository.findOneBy({ codigoBairro });

    if (bairroExists) {
      throw new AppError('Já existe um bairro cadastrado com esse código');
    }
    const bairro = bairrosRepository.create({
      codigoBairro,
      codigoMunicipio,
      nome,
      status,
    });
    await bairrosRepository.save(bairro);
    return bairro;
  }
}

export default CriarBairro;
