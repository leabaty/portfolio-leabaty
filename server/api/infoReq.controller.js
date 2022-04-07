import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const log = console.log;

export default class InfoReqController {
  static async emailSendInfoRequest(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: "./views/layouts",
          defaultLayout: false,
        },
        viewPath: "./views/layouts",
        extName: ".handlebars",
      };

      transporter.use("compile", hbs(handlebarOptions));

      let mailOptions = {
        from: formData.email,
        to: process.env.GMAIL_USER,
        subject: "❓ Nouvelle demande d'information",
        template: "infoRequest",
        context: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          infoReq: formData.information_request,
        },
      };

      await transporter.sendMail(mailOptions);
      console.log("BACK HERE - EMAIL SENT")
      
    } catch (err) {
      log("Error occured: " + err);
    }
  }

  static async emailSendInfoRecap(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: "./views/layouts",
          defaultLayout: false,
        },
        viewPath: "./views/layouts",
        extName: ".handlebars",
      };

      transporter.use("compile", hbs(handlebarOptions));

      let mailOptions = {
        from: process.env.MAIL_FROM,
        to: formData.email,
        subject: "🧘 Votre demande d'information à Laure Pépin | Apsara Yoga",
        template: "infoRecap",
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
      log("Error occured: " + err);
    }
  }
}
