import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import dotenv from 'dotenv';

dotenv.config();

const { USER_MAIL, USER_PASS } = process.env;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: USER_MAIL,
    pass: USER_PASS,
  },
});

export const sendMail = async (
  name: string,
  to: string,
  pin: string
): Promise<SMTPTransport.SentMessageInfo> => {
  const message = {
    from: 'App Support <andris@kreata.ee>',
    to: `${name ?? ''}<${to}>`,
    subject: 'Pin recovery',

    // plaintext body
    text: `Hello ${
      name || to
    }.\n\nYour Secure Box PIN is: ${pin}.\n\nThanks for being our valuable customer of Secure Box\n\nSincerely,\nSupport Team,\nSecure Box`,

    // HTML body
    html: `<div>
Hello ${name || to},<br /><br />
Your Secure Box PIN is: ${pin}.<br /><br />
Thanks for being our valuable customer of Secure Box.<br /><br />
Sincerely,<br />
Support Team,<br />
Secure Box
</div>
`,
  };

  const info = await transporter.sendMail(message);
  return info;
};
