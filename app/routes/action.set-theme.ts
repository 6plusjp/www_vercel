import type { ActionFunctionArgs } from "@vercel/remix";
import { json, redirect } from "@vercel/remix";

import { getThemeSession, isTheme } from "~/utils/theme";

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme))
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme.`,
    });

  session.setTheme(theme);

  return json(
    { success: true },
    {
      headers: { "Set-Cookie": await session.commit() },
    },
  );
};

export const loader = () => redirect("/", { status: 404 });
