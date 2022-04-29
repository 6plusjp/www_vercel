import invariant from "tiny-invariant";
// import { formatHtml } from "./unified";

interface Props {
  subject: string;
  text: string;
  name: string;
  email: string;
}
// async function sendEmail(data: Props) {
//   const { name, email, subject, body } = data;
//   let { html } = data;

//   if (html === undefined) {
//     html = await formatHtml(body);
//   } else if (html === null) {
//     html = body;
//   }

//   const Recipient = await require("mailersend").Recipient;
//   const EmailParams = await require("mailersend").EmailParams;
//   const MailerSend = await require("mailersend");

//   invariant(process.env.MAILERSEND_API_KEY, "MAILERSEND_API_KEY should be!");
//   const mailersend = new MailerSend({
//     api_key: process.env.MAILERSEND_API_KEY,
//   });

//   const recipients = [new Recipient(email, name)];

//   const personalization = [
//     {
//       email: email,
//       data: {
//         body: html,
//         name: name,
//         email: email,
//         subject: subject,
//       },
//     },
//   ];

//   const emailParams = new EmailParams()
//     .setFrom("info@6plus.tech")
//     .setFromName("6+")
//     .setRecipients(recipients)
//     .setSubject("お問い合わせ内容のご確認")
//     .setTemplateId("3z0vklo6p8vl7qrx")
//     .setPersonalization(personalization);

//   const result = await mailersend.send(emailParams);
//   console.log(result);
// }

async function sendEmail(data: Props) {
  invariant(process.env.MAILERSEND_API_KEY, "MAILERSEND_API_KEYが必要です!");
  const apiKey = process.env.MAILERSEND_API_KEY;
  const auth = `Bearer ${apiKey}`;

  const { name, email, subject, text } = data;

  const textContent = `
  ${name} 様
  お問い合わせいただき誠にありがとうございます。
  下記の内容で確かに承りました。

  【お問い合わせ内容】
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ■件名 : ${subject}
  ■お問い合わせ内容 : ${text}

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  数日営業日以内に6plusjp6gmail.com（2つ目の6を@に）から返信させていただきます。しばらくお待ちください。

  ※このメールにお心当たりのない場合は、誠に恐れ入りますが破棄いただきますよう、お願い申し上げます。
  ※本メールの送信元メールアドレスは、送信専用アドレスとなっております。このメールに返信されても、返信内容の確認およびご返答はできません。予めご了承ください。

  □ウェブサイト ⇒ https://6plus.tech
  `.trim();
  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  <style type="text/css">
    @font-face {
      font-family: 'Matter';
      src: url('/Matter-Medium.woff2') format('woff2'),
        url('/Matter-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Matter';
      src: url('/Matter-Regular.woff2') format('woff2'),
        url('/Matter-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  </style>
</head>

<body style="font-family:Matter, sans-serif;">
  <div style="margin: 0 auto; max-width: 450px;">
    <h2 style="text-align: left">
      ${name} 様
    </h2>
    <h3 style="text-align: left">
      お問い合わせいただき誠にありがとうございます。
    </h3>

    <center><img src="" style="max-width: 80%"></center>

    <h3 style="text-align: center">下記の内容で確かに承りました。</h3>

    <div style="text-align: left">
      <span style="font-weight: 600;">件名 :</span>
      <div style="margin: 0 auto; width: 80%; padding: 1rem; background: rgb(51 65 85); border-radius: 7px; border-width: 0; font-size: 1.1rem; font-family: sans-serif; text-decoration: none; color: white; overflow-wrap:break-work;">${subject}</div>
      <span style="font-weight: 600;">お問い合わせ内容 :</span>
      <div style="margin: 0 auto; width: 80%; padding: 1rem; background: rgb(51 65 85); border-radius: 7px; border-width: 0; font-size: 1.1rem; font-family: sans-serif; text-decoration: none; color: white; overflow-wrap:break-work;">${text}</div>
    </div>

    <hr style="width: 60%; height: 0px; border: 1px solid lightgrey; margin-top: 3rem; margin-bottom: 3rem">

    <div style="text-align: left; color: grey; font-size: .8rem; line-height: 1.2rem; margin-bottom: 3rem">
      <ul>
        <li>数日営業日以内に6plusjp6gmail.com（2つ目の6を@に）から返信させていただきます。しばらくお待ちください。</li>
        <li>このメールにお心当たりのない場合は、誠に恐れ入りますが破棄いただきますよう、お願い申し上げます。</li>
        <li>本メールの送信元メールアドレスは、送信専用アドレスとなっております。このメールに返信されても、返信内容の確認およびご返答はできません。予めご了承ください。</li>
      </ul>
      <p style="text-align: center; color: black; margin-top: 2rem;">Copyright &copy; 2022 <a href="https://6plus.tech" target="_blank" rel="noopener noreferrer">6+</a> All rights reserved.</p>
    </div>
  </div>
</body>

</html>
`;

  const body = {
    from: {
      email: "info@6plus.tech",
      name: "6+ <info@6plus.tech>",
    },
    to: [
      {
        email: email,
        name: name,
      },
    ],
    subject: "お問い合わせ内容のご確認",
    text: textContent,
    html: htmlContent,
  };

  await fetch(`https://api.mailersend.com/v1/email`, {
    method: "post",
    body: body && JSON.stringify(body),
    headers: {
      Authorization: auth,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json",
    },
  });
}

export { sendEmail };
