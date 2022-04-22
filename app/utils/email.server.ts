// import invariant from "tiny-invariant";
import { formatHtml } from "./unified";

// const SibApiV3Sdk = require("sib-api-v3-typescript");
const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_API_KEY
);

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

  const message = {
    name: name,
    from_email: email,
    subject: subject,
    text: html,
    to: [
      {
        email: "6plusjp@gmail.com",
        type: "to",
      },
    ],
  };

  const response = await mailchimp.messages.send({
    message,
  });

  console.log(response);
}

export { sendEmail };
