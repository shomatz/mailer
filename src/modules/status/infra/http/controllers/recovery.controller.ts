import type { Request, Response } from 'express';
import { sendMail } from '../../../../../services/mail';

export class RecoveryController {
  public async send(req: Request, res: Response) {
    const name = req.body.name?.toString();
    const to = req.body.to?.toString();
    const pin = req.body.pin?.toString();

    console.log({ name, pin, to });

    if (pin && to) {
      sendMail(name, to, pin).then((info) => {
        console.log('Message sent successfully as %s', info.messageId);
      });

      res.status(200);
      res.json({ status: true });
    } else {
      res.status(200);
      res.json({ status: false });
    }
  }
}

export default new RecoveryController();
