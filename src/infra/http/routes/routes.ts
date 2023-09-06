import { Router } from 'express';

import DefaultRouter from '../../../modules/status/infra/http/routes/default.route';

const Routes = Router();

Routes.use('/', DefaultRouter);

export default Routes;
