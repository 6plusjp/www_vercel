const SibApiV3Sdk = require("sib-api-v3-typescript");
import invariant from "tiny-invariant";

import { formatHtml } from "./unified";

interface Props {
  subject: string;
  body: string;
  html?: string;
  name: string;
  email: string;
}
async function sendEmail(data: Props) {
  const { name, email, subject, body } = data;
  let { html } = data;

  if (html === undefined) {
    html = await formatHtml(body);
  } else if (html === null) {
    html = body;
  }

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

  const templateId = 1;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = html;
  sendSmtpEmail.sender = {
    name: "6plus -ロクタス-",
    email: "6plusjp@gmail.com",
  };
  sendSmtpEmail.to = [{ email: email, name: name }];
  // sendSmtpEmail.cc = [{ email: 'example2@example2.com', name: 'Janice Doe' }]
  // sendSmtpEmail.bcc = [{ name: 'John Doe', email: 'example@example.com' }]
  // sendSmtpEmail.replyTo = { email: "replyto@domain.com", name: "John Doe" };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "New Subject",
  };

  apiInstance.sendTransacEmail(templateId, sendSmtpEmail).then(
    function () {
      console.log("SENDINBLUE_API called successfully.");
    },
    function (error: Error) {
      console.error(error);
    }
  );

  // const body = new URLSearchParams({
  //   to,
  //   from,
  //   subject,
  //   text,
  //   html,
  // });

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(body),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "api-key": process.env.SENDINBLUE_API_KEY,
  //   },
  // };
  // invariant(process.env.SENDINBLUE_API_KEY, "SENDINBLUE_API_KEY not found");

  // await fetch(`https://api.sendinblue.com/v3/smtp/email`, options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
}

async function sendTestEmail() {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

  const templateId = 1;

  const sendTestEmail = new SibApiV3Sdk.SendTestEmail();

  sendTestEmail.emailTo = ["magogappa@gmail.com"];

  apiInstance.sendTestTemplate(templateId, sendTestEmail).then(
    function () {
      console.log("API called successfully.");
    },
    function (error: Error) {
      console.error(error);
    }
  );
}

export { sendEmail, sendTestEmail };
