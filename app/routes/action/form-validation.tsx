import type { ActionFunction } from "remix";
import { json } from "remix";
import { Form, useActionData } from "@remix-run/react";

import { z } from "zod";
import { validationError } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import type { SEOHandle } from "~/utils/seo";

const schema = withZod(
  z.object({
    name: z.string().min(1, "お名前 / 会社名は必須です"),
    email: z
      .string()
      .min(1, "メールアドレスは必須です")
      .email("メールアドレスの形式が正しくありません"),
    subject: z.string().min(1, "件名は必須です"),
    body: z.string().min(1, "本文は必須です"),
  })
);

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await schema.validate(await request.formData());
  if (formData.error) return validationError(formData.error);
  return json({ status: "success", fields: formData.data, errors: {} });
};

export default function NoJsFormRoute() {
  const actionData = useActionData();
  return (
    <Form method="post" action="/newsletter/subscribe">
      <p>
        <input type="text" name="email" /> <button type="submit">送信</button>
      </p>

      {actionData.status === "success" ? (
        <p>Thanks for subscribing!</p>
      ) : actionData.status === "error" ? (
        <p data-error>{actionData.data.error}</p>
      ) : null}
    </Form>
  );
}
