import * as React from "react";
import type { ActionFunction, MetaFunction } from "remix";
import { useActionData } from "remix";
import { json } from "remix";

import clsx from "clsx";
import { z } from "zod";
import type { ValidatorData } from "remix-validated-form";
import {
  useIsSubmitting,
  ValidatedForm,
  validationError,
} from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";

import { Navbar } from "~/components/navbar";
import { Input, Select, Textarea } from "~/components/form";
import { Footer } from "~/components/footer";
import { Alert } from "~/components/alert";

import { getMeta } from "~/utils/seo";
import { getUrl } from "~/utils/misc";
import { useHydrated } from "~/utils/hydrated";
import { sendEmail, sendEmailToOwner } from "~/utils/email.server";
import { Button } from "~/components/button";

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
  text: z
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
    "お問い合わせはこちらから。仕事のご依頼、ご質問、その他何でも構いません。気軽にご連絡ください。";

  return {
    ...getMeta({
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      title,
      description,
    }),
  };
};

type ActionData = {
  status: "success" | "error";
  fields: ValidatorData<typeof clientValidator>;
};
export const action: ActionFunction = async ({ request }) => {
  const result = await clientValidator.validate(await request.formData());
  if (result.error) return validationError(result.error, result.submittedData);

  const response = await sendEmailToOwner(result.data);
  if (response.ok) {
    const response = await sendEmail(result.data);
    if (response.ok) {
      return json({
        status: "success",
        fields: result.data,
      });
    } else {
      return json({
        status: "error",
        fields: result.data,
      });
    }
  } else {
    return json({
      status: "error",
      fields: result.data,
    });
  }
};

export default function Contact() {
  const data = useActionData<ActionData>();
  const isHydrated = useHydrated();

  return (
    <div className="bg-bp duration-500">
      <Navbar />
      <main className="px-[5vw]">
        <ValidatedForm
          id="validatedForm"
          method="post"
          resetAfterSubmit
          name="contact"
          validator={clientValidator}
          className="mx-auto max-w-xl py-12 lg:max-w-7xl"
          noValidate={isHydrated}
          defaultValues={{
            name: data?.fields.name ?? "",
            email: data?.fields.email ?? "",
            subject: data?.fields.subject,
            text: data?.fields.text ?? "",
          }}
        >
          <h1 className="mb-12 py-8 text-3xl font-bold text-tp sm:text-4xl">
            お問い合わせ
          </h1>
          <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
            <Input name="name" label="お名前 / 会社名" placeholder="6+" />
            <Input
              type="email"
              label="メールアドレス"
              placeholder="6plusjp@example.com"
              name="email"
            />
            <Select name="subject" label="件名">
              <option value="仕事のご依頼">仕事のご依頼</option>
              <option value="ご質問">ご質問</option>
              <option value="その他">その他</option>
            </Select>
            <Textarea
              name="text"
              label="お問い合わせ内容"
              placeholder="I am writing to ask you to send us your company brochure and product catalog..."
              rows={8}
            />
            {data?.status === "success" ? (
              <>
                <Alert state="success" className="w-max">
                  完了しました!
                  <br />
                  お問い合わせ内容確認の為、自動送信メールをお送りいたします。
                </Alert>
              </>
            ) : (
              <div className="my-8 flex items-end justify-center gap-4 sm:justify-between lg:col-span-2">
                <div className="hidden w-28 sm:block"></div>
                <SubmitButton />
                <ResetButton />
              </div>
            )}
            {data?.status === "error" ? (
              <Alert state="error" className="w-max">
                エラーが発生したため、送信できませんでした!
                <br />
                お手数ですがしばらくして再度お試しになるか、6plusjp6gmail.com（2つ目の6を@に）まで直接ご連絡ください。
              </Alert>
            ) : null}
          </div>
        </ValidatedForm>
      </main>
      <Footer className="bg-bs duration-500" />
    </div>
  );
}

const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <Button
      type="submit"
      className={clsx(
        "btn w-28 bg-hp text-base shadow sm:text-lg",
        isSubmitting
          ? "text-ts"
          : "text-tp transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:text-hp hover:shadow-inner focus:-translate-y-0.5 focus:border focus:bg-transparent focus:text-hp focus:shadow-inner focus:outline-none dark:hover:border-white"
      )}
      disabled={isSubmitting}
    >
      {isSubmitting ? "送信中..." : "送信"}
    </Button>
  );
};

const ResetButton = () => {
  return (
    <Button
      type="reset"
      className="btn w-28 bg-bs text-base text-tp shadow transition duration-300 hover:-translate-y-0.5 hover:border hover:border-black hover:bg-transparent hover:shadow-inner focus:border dark:hover:border-white sm:text-lg"
    >
      リセット
    </Button>
  );
};
