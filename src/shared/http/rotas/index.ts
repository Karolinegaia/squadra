import bairroRota from '@modules/Bairro/rotas/rotas';
import { Router } from 'express';

const routes = Router();
routes.use('/bairro', bairroRota);

export default routes;
