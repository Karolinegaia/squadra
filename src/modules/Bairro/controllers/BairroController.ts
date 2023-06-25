import { Request, Response } from 'express';
import CriarBairro from '../services/CriarBairro';

export default class BairroController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { codigoBairro, codigoMunicipio, nome, status } = request.body;

    const criarBairro = new CriarBairro();
    const bairro = await criarBairro.execute({
      codigoBairro,
      codigoMunicipio,
      nome,
      status,
    });
    return response.json(bairro);
  }
  // public async index(request: Request, response: Response): Promise<Response> {
  //   listarBairro = new ListarBairro();

  //   const bairros = await listarBairro.execute();
  //   return response.json(bairros);
  // }
  // public async show(request: Request, response: Response): Promise<Response> {
  //   const { codigoBairro } = request.params;
  //   const showBairro = new ShowListarBairro();
  //   const bairro = await showBairro.execute({ codigoBairro });

  //   return response.json(bairro);
  // }
}
