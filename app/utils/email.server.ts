import invariant from "tiny-invariant";

interface Props {
  subject: string;
  text: string;
  name: string;
  email: string;
}

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
</head>

<body style="font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;">
  <div style="margin: 0 auto; max-width: 450px;">
    <h3>
      ${name} 様
    </h3>
    <h3>
      お問い合わせいただき誠にありがとうございます。
    </h3>

    <svg style="max-width: 450px;" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="transparent" d="M0 0h900v600H0z" />
      <circle cx="495.273" cy="114.942" r="43.942" fill="#63a18f" />
      <path d="M506.303 520.49V353.279a12.864 12.864 0 0 0-17.378-12.005l-64.321 24.081a12.856 12.856 0 0 0-8.344 12.066V520.49" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path clip-rule="evenodd" d="M359.983 362.914h22.511c6.216 0 11.255 5.039 11.255 11.255v22.511h-45.021v-22.511c0-6.216 5.039-11.255 11.255-11.255v0z" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M371.238 340.403v22.511M326.217 520.49V407.936c0-6.216 5.039-11.256 11.255-11.256h67.533c6.216 0 11.255 5.04 11.255 11.256V520.49m-61.9-56.278h33.767m-33.767 0h33.767m-33.767-33.765h33.767m58.147-29.445v79.468m30.015-79.468v79.468" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path clip-rule="evenodd" d="M156.168 360.414h20.01c5.525 0 10.005 4.479 10.005 10.005v20.009h-40.019v-20.009c0-5.526 4.479-10.005 10.004-10.005z" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M166.173 340.403v20.009M126.154 520.49V400.433c0-5.526 4.48-10.005 10.005-10.005h60.029c5.525 0 10.005 4.479 10.005 10.005v30.014m30.014-.001v-70.034a10.006 10.006 0 0 1 13.517-9.365l50.023 18.759a10.007 10.007 0 0 1 6.494 9.375v141.308" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M176.178 520.488V440.45c0-5.526 4.479-10.005 10.005-10.005h60.028c5.526 0 10.005 4.479 10.005 10.005v80.038m-55.026-33.013h30.014m-30.014-27.014h30.014M870 523.846H29m617.233-71.96 60.029-51.455 60.028 51.455" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M757.716 520.489V400.431h-25.733v22.011m-40.729 98.047v-42.88h30.014v42.88m-66.461-75.956v75.956m-73.646-30.013v30.014m250.309-30.014v30.014M71.03 490.476v30.014" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="556.219" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="806.528" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="46.088" y="420.442" width="50.024" height="70.034" rx="20.483" stroke="#E1E4E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M355.547 135.95c11.707 0 6.23-18.564-8.602-14.13-.822-25.778-42.838-44.638-60.212-9.871-4.912-3.887-15.942 3.455-13.5 9.871-5.456.465-9.749 1.096-13.089 1.932-7.711 1.93-6.185 12.111 1.764 12.04l93.639.158zm450.114 102.273c17.396 0 9.256-27.416-12.782-20.867-1.22-38.068-63.652-65.922-89.467-14.577-7.299-5.74-23.689 5.102-20.059 14.577-8.108.686-14.486 1.619-19.448 2.853-11.459 2.851-9.191 17.886 2.62 17.781l139.136.233zm-643.878-70.379h63.01c5.634 0 8.061-7.349 3.451-10.609-.064-.047-.13-.093-.195-.139-6.564-4.545-15.179-4.132-15.179-4.132s-1.229-24.595-24.406-24.595c-20.955 0-29.311 20.723-32.325 32.14-.979 3.709 1.835 7.335 5.644 7.335zm462.611 0h63.01c5.634 0 8.061-7.349 3.451-10.609-.064-.047-.13-.093-.195-.139-6.564-4.545-15.178-4.132-15.178-4.132s-1.23-24.595-24.407-24.595c-20.954 0-29.31 20.723-32.325 32.14-.979 3.709 1.835 7.335 5.644 7.335zm-187.598 14.231h-51.464c-4.602 0-6.584-5.908-2.819-8.529.053-.037.106-.075.16-.111 5.361-3.654 12.397-3.322 12.397-3.322s1.004-19.773 19.934-19.773c17.115 0 23.94 16.66 26.402 25.838.799 2.982-1.499 5.897-4.61 5.897zm-300.265 58.732H52.003c-6.843 0-9.795-8.662-4.192-12.506l.237-.162c7.975-5.358 18.44-4.872 18.44-4.872s1.496-28.986 29.656-28.986c13.922 0 25.173 23.263 25.173 23.263s18.939 0 22.073 14.616c.948 4.428-2.229 8.647-6.859 8.647zm462.611 0h-84.528c-6.843 0-9.795-8.662-4.193-12.506l.238-.162c7.975-5.358 18.441-4.872 18.441-4.872s1.495-28.986 29.654-28.986c13.922 0 25.174 23.263 25.174 23.263s18.939 0 22.073 14.616c.947 4.428-2.229 8.647-6.859 8.647zm-384.553 2.968h187.398c17.591 0 16.784-14.56 11.038-19.633-5.889-5.199-17.526-3.091-17.526-3.091s-3.464-9.793-14.867-14.56c-10.087-4.218-20.654-2.211-20.654-2.211s0-6.721-6.458-12.287c-6.459-5.567-15.07-5.026-15.07-5.026s-5.92-37.061-45.477-37.061c-39.558 0-44.133 34.896-44.133 34.896s-8.88 0-15.339 5.952c-6.458 5.952-7.266 12.714-7.266 12.714s-21.599-2.925-27.987 15.804c-3.806 11.163 4.015 24.503 16.341 24.503z" fill="#fff" stroke="#E1E4E5" stroke-width="4" />
    </svg>

    <h3 style="text-align: center">下記の内容で確かに承りました。</h3>

    <div>
      <h5>件名 :</h5>
      <p style="padding: 1rem; color: #63A18F; font-size: 1.1rem; overflow-wrap:break-word;">${subject}</p>
      <h5>お問い合わせ内容 :</h5>
      <p style="padding: 1rem; color: #63A18F; font-size: 1.1rem; overflow-wrap:break-word;">${text}</p>
    </div>

    <hr style="width: 60%; height: 0px; border: 1px solid lightgrey; margin-top: 3rem; margin-bottom: 3rem">

    <div style="color: grey; font-size: .8rem; line-height: 1.2rem; margin-bottom: 3rem">
      <ul>
        <li>数日営業日以内に6plusjp6gmail.com（2つ目の6を@に）から返信させていただきます。しばらくお待ちください。</li>
        <li>このメールにお心当たりのない場合は、誠に恐れ入りますが破棄いただきますよう、お願い申し上げます。</li>
        <li>本メールの送信元メールアドレスは、送信専用アドレスとなっております。このメールに返信されても、返信内容の確認およびご返答はできません。予めご了承ください。</li>
      </ul>
      <p style="text-align: center; color: black; margin-top: 2rem;">Copyright &copy; <a style="color: #63A18F;" href="https://6plus.tech" target="_blank" rel="noopener noreferrer">6+</a> All rights reserved.</p>
    </div>
  </div>
</body>

</html>
`;

  const body = {
    from: {
      email: "info@6plus.tech",
      name: "6+",
    },
    to: [
      {
        email: email,
        name: name,
      },
    ],
    subject: "[6+] お問い合わせ内容のご確認",
    text: textContent,
    html: htmlContent,
  };

  return fetch(`https://api.mailersend.com/v1/email`, {
    method: "post",
    body: body && JSON.stringify(body),
    headers: {
      Authorization: auth,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json",
    },
  });
}

async function sendEmailToOwner(data: Props) {
  invariant(process.env.MAILERSEND_API_KEY, "MAILERSEND_API_KEYが必要です!");
  const apiKey = process.env.MAILERSEND_API_KEY;
  const auth = `Bearer ${apiKey}`;

  const { name, email, subject, text } = data;

  const textContent = `
  【お問い合わせ内容】
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ■お名前/会社名 : ${name}
  ■メールアドレス : ${email}
  ■件名 : ${subject}
  ■お問い合わせ内容 : ${text}

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  const body = {
    from: {
      email: "info@6plus.tech",
      name: "6+",
    },
    to: [
      {
        email: "6plusjp@gmail.com",
        name: "Shoma Yamamoto",
      },
    ],
    subject: `${name}様 ${subject}`,
    text: textContent,
  };

  return fetch(`https://api.mailersend.com/v1/email`, {
    method: "post",
    body: body && JSON.stringify(body),
    headers: {
      Authorization: auth,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json",
    },
  });
}

export { sendEmail, sendEmailToOwner };
