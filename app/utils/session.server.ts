import { createCookieSessionStorage, redirect } from "@vercel/remix";
import invariant from "tiny-invariant";

// import { Theme } from "./theme";
// import { __DEV__ } from "./assertion";
import { getRequiredServerEnvVar } from "./env.server";
require("dotenv").config();

const sessionStorageKey = "6+__session";
// const hasSupport = () => typeof Storage !== "undefined";
invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: sessionStorageKey,
    // expires: new Date(Date.now() + 3600),
    httpOnly: true,
    // maxAge: 3600,
    path: "/",
    sameSite: "lax",
    secrets: [getRequiredServerEnvVar("SESSION_SECRET")],
    secure: true,
  },
});

const USER_SESSION_KEY = "userId";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserId(request: Request): Promise<string | undefined> {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}

// export async function getUser(request: Request): Promise<null | User> {
//   const userId = await getUserId(request)
//   if (userId === undefined) return null

//   const user = await getUserById(userId)
//   if (user) return user

//   throw await logout(request)
// }

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }

  return userId;
}

// export async function requireUser(request: Request) {
//   const userId = await requireUserId(request)

//   const user = await getUserById(userId)
//   if (user) return user

//   throw await logout(request)
// }

export async function createUserSession({
  request,
  userId,
  remember,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

// type MaybeTheme = Theme | undefined;

// export interface LocalStorageManager {
//   get(init?: Theme): MaybeTheme;
//   set(value: Theme): void;
// }
// const createSessionLocalStorage: LocalStorageManager = {
//   get(init?) {
//     if (!hasSupport()) return init;
//     try {
//       const value = localStorage.getItem(sessionStorageKey) as MaybeTheme;
//       return value ?? init;
//     } catch (error) {
//       if (__DEV__) {
//         console.log(error);
//       }
//       return init;
//     }
//   },
//   set(value) {
//     if (!hasSupport()) return;
//     try {
//       localStorage.setItem(sessionStorageKey, value);
//     } catch (error) {
//       if (__DEV__) {
//         console.log(error);
//       }
//     }
//   },
// };
