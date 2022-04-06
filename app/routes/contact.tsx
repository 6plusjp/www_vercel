import * as React from "react";
import { useActionData, json, useFetcher } from "remix";
import type { ActionFunction, LoaderFunction, MetaFunction } from "remix";

import clsx from "clsx";
import { z } from "zod";
import {
  setFormDefaults,
  ValidatedForm,
  validationError,
} from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";

import { Navbar } from "~/components/navbar";
import { ErrorPanel, Input, Select, Textarea } from "~/components/form";
import { Footer } from "~/components/footer";
import { Alert } from "~/components/alert";

import { getMeta } from "~/utils/seo";
import { getUrl } from "~/utils/misc";
import { useHydrated } from "~/utils/hydrated";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { sendEmail } from "~/utils/email.server";

const schema = z.object({
  name: z
    .string()
    .nonempty("お名前 / 会社名は必須です")
    .max(30, "お名前 / 会社名が長すぎます"),
  email: z
    .string()
    .nonempty("メールアドレスは必須です")
    .email("メールアドレスの形式が正しくありません"),
  subject: z.enum(["仕事のご依頼", "ご質問", "その他"]),
  body: z
    .string()
    .nonempty("お問い合わせ内容は必須です")
    .min(5, "お問い合わせ内容が短すぎます")
    .max(1000, "お問い合わせ内容が長すぎます"),
});

const clientValidator = withZod(schema);

export const meta: MetaFunction = ({ parentsData }) => {
  const { requestInfo } = parentsData.root;
  const title = "Contact Me | 6+";
  const description =
    "こちらはお問い合わせフォームになります。仕事のご依頼、ご質問、その他何でも構いません。気軽にご連絡ください。";

  return {
    ...getMeta({
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      title,
      description,
    }),
  };
};

// export const loader: LoaderFunction = () => {
//   // for no-js
//   const data = useActionData();
//   if (data.fields) {
//     return json(setFormDefaults("validatedForm", data.fields));
//   } else {
//     return;
//   }
// };

type ActionData = {
  status: "success" | "error";
  fields: {
    name: string | null;
    email: string | null;
    subject: "仕事のご依頼" | "ご質問" | "その他" | null;
    body: string | null;
  };
  errors: {
    name?: string | null;
    email?: string | null;
    subject?: string | null;
    body?: string | null;
  };
};
export const action: ActionFunction = async ({ request }) => {
  const result = await clientValidator.validate(await request.formData());
  if (result.error) return validationError(result.error);
  await sendEmail(result.data);
  return json({ status: "success", fields: result.data });
};

export default function Contact() {
  // const data = useActionData()
  const fetcher = useFetcher();
  const emailSuccessfullySent =
    fetcher.type === "done" &&
    (fetcher.data as ActionData).status === "success";

  const isHydrated = useHydrated();
  return (
    <div className="bg-bp duration-500">
      <Navbar />
      <main className="px-[5vw]">
        <ValidatedForm
          id="validatedForm"
          // netlify-honeypot="bot-field"
          // data-netlify="true"
          method="post"
          resetAfterSubmit
          name="contact"
          validator={clientValidator}
          fetcher={fetcher}
          className="mx-auto max-w-xl py-12 lg:max-w-7xl"
          noValidate={isHydrated}
          aria-describedby="contact-form-error"
        >
          <Alert state="warning" className="mb-8">
            現在、お問い合わせフォームはメンテナンス中です。
            <br />
            ご依頼、ご質問がある方はお手数をおかけしますが、
            6plusjp6gmail.com（2つ目の6を@に）までご連絡ください。
          </Alert>
          <h1 className="mb-12 py-8 text-3xl font-bold text-tp sm:text-4xl">
            お問い合わせ
          </h1>
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden">
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
          <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
            <Input
              name="name"
              label="お名前 / 会社名"
              placeholder="6+"
              defaultValue={fetcher.data?.fields.name ?? ""}
            />
            <Input
              type="email"
              label="メールアドレス"
              placeholder="6plusjp@example.com"
              defaultValue={fetcher.data?.fields.email ?? ""}
              name="email"
            />
            <Select
              name="subject"
              label="件名"
              placeholder="No subject"
              defaultValue={fetcher.data?.fields.subject ?? ""}
            >
              <option value="仕事のご依頼">仕事のご依頼</option>
              <option value="ご質問">ご質問</option>
              <option value="その他">その他</option>
            </Select>
            <Textarea
              name="body"
              label="お問い合わせ内容"
              placeholder="I am writing to ask you to send us your company brochure and product catalog."
              rows={8}
              defaultValue={fetcher.data?.fields.body ?? ""}
            />
            {emailSuccessfullySent ? (
              <>
                <Alert state="success">送信完了しました!</Alert>
              </>
            ) : (
              // IDEA: show a loading state here
              <div className="my-8 flex items-end justify-center gap-4 sm:justify-between lg:col-span-2">
                <div className="hidden w-28 sm:block"></div>
                <button
                  type="submit"
                  disabled={fetcher.state !== "idle"}
                  className={clsx(
                    "btn w-28 bg-hp text-base shadow sm:text-lg",
                    fetcher.state !== "idle"
                      ? "text-ts"
                      : "text-tp transition duration-300 hover:-translate-y-0.5 hover:border hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border dark:hover:border-white hover:border-black focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none"
                  )}
                >
                  {fetcher.state === "submitting" ? "送信中..." : "送信"}
                </button>
                <button
                  type="reset"
                  className="btn w-28 bg-bs text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border dark:hover:border-white hover:border-black hover:bg-transparent hover:shadow-inner focus:border sm:text-lg"
                >
                  リセット
                </button>
              </div>
            )}
            {fetcher.data?.errors ? (
              <ErrorPanel id="contact-form-error">
                {fetcher.data.errors}
              </ErrorPanel>
            ) : null}
          </div>
        </ValidatedForm>
      </main>
      <Footer className="bg-bs duration-500" />
    </div>
  );
}
