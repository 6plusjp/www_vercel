// import invariant from "tiny-invariant";
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

  const Recipient = require("mailersend").Recipient;
  const EmailParams = require("mailersend").EmailParams;
  const MailerSend = require("mailersend");

  const mailersend = new MailerSend({
    api_key: process.env.MAILERSEND_API_KEY,
  });

  const recipients = [new Recipient(email, name)];

  const personalization = [
    {
      email: email,
      data: {
        body: body,
        name: name,
        email: email,
        subject: subject,
      },
    },
  ];

  const emailParams = new EmailParams()
    .setFrom("info@6plus.tech")
    .setFromName("6+")
    .setRecipients(recipients)
    .setSubject("お問い合わせ内容のご確認")
    .setTemplateId("3z0vklo6p8vl7qrx")
    .setPersonalization(personalization);

  mailersend.send(emailParams);
}

export { sendEmail };
