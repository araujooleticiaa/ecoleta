import { Router } from 'express';
import PointController from '../controllers/PointsController';
import Itemsontroller from '../controllers/ItemsController';

const routes = Router();
const pointsController = new PointController();
const itemsController = new Itemsontroller();

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes;
