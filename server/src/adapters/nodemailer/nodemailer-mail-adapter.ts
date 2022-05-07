import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

// const transport = nodemailer.createTransport({
//   host: "",
//   port: "",
//   auth: {
//     user: "",
//     pass: "",
//   },
// });

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    // await transport.sendMail({
    //   from: "Equipe Feedget <oi@feedget.com>",
    //   to: "Lucas Gomes <lucasgpdev@gmail.com>",
    //   subject: subject,
    //   html: body,
    // });
  }
}
