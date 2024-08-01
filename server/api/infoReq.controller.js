import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const log = console.log;

// Get the __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class InfoReqController {
  static async emailSendInfoRequest(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: '.handlebars',
          partialsDir: path.resolve(__dirname, '../views/layouts'),
          defaultLayout: false,
        },
        viewPath: path.resolve(__dirname, '../views/layouts'),
        extName: '.handlebars',
      };

      transporter.use('compile', hbs(handlebarOptions));

      let mailOptions = {
        from: formData.email,
        to: process.env.GMAIL_USER,
        subject: "❓ Nouvelle demande d'information",
        template: 'infoRequest',
        context: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          infoReq: formData.information_request,
        },
      };

      await transporter.sendMail(mailOptions);
    } catch (err) {
      log('Error occurred: ' + err);
    }
  }

  static async emailSendInfoRecap(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: '.handlebars',
          partialsDir: path.resolve(__dirname, '../views/layouts'),
          defaultLayout: false,
        },
        viewPath: path.resolve(__dirname, '../views/layouts'),
        extName: '.handlebars',
      };

      transporter.use('compile', hbs(handlebarOptions));

      let mailOptions = {
        from: process.env.MAIL_FROM,
        to: formData.email,
        subject: "Thank you for your message ! | Léa Baty's Portfolio",
        template: 'infoRecap',
        context: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          infoReq: formData.information_request,
        },
      };

      await transporter.sendMail(mailOptions);
    } catch (err) {
      log('Error occurred: ' + err);
    }
  }
}
