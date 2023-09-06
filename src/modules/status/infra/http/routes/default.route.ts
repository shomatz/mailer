import { Router } from 'express';
import type { Request, Response } from 'express';
import statusController from '../controllers/status.controller';
import recoveryController from '../controllers/recovery.controller';

const DefaultRoute = Router();

DefaultRoute.get('/', async (req: Request, res: Response) => {
  await statusController.show(req, res);
});

DefaultRoute.post('/send-pin-recovery', async (req: Request, res: Response) => {
  await recoveryController.send(req, res);
});

export default DefaultRoute;
