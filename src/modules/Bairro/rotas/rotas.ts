import { Router } from 'express';
import BairroController from '../controllers/BairroController';

const bairroRota = Router();
const bairroController = new BairroController();

bairroRota.get('/bairro', bairroController.create);

export default bairroRota;
