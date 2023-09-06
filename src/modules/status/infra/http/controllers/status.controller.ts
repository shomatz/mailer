import type { Request, Response } from 'express';
import { transporter } from '../../../../../services/mail';

export class StatusController {
  public async show(req: Request, res: Response) {
    void req;
    res.status(200);
    transporter.verify(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
    res.json({
      status: 'online',
      date: new Date(),
      environment: process.env.NODE_ENV,
      aws: {
        region: process.env.AWS_REGION || 'local',
        function_version: process.env.AWS_LAMBDA_FUNCTION_VERSION || 'local',
      },
    });
  }
}

export default new StatusController();
