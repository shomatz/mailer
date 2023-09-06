import type { Request, Response } from 'express';
import { sendMail } from '../../../../../services/mail';

export class RecoveryController {
  public async send(req: Request, res: Response) {
    const name = req.body.name?.toString();
    const to = req.body.to?.toString();
    const pin = req.body.pin?.toString();

    if (pin && to) {
      const info = await sendMail(name, to, pin);

      console.log('Message sent successfully as %s', info.messageId);
      res.status(200);
      res.json({ status: true });
    } else {
      res.status(200);
      res.json({ status: false });
    }
  }
}

export default new RecoveryController();
