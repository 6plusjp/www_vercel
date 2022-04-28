function getEnv() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    SESSION_SECRET: process.env.SESSION_SECRET,
    MAILERSEND_API_KEY: process.env.MAILERSEND_API_KEY,
  };
}

type ENV = ReturnType<typeof getEnv>;

// App puts these on
declare global {
  // eslint-disable-next-line
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}

function getRequiredEnvVarFromObj(
  obj: Record<string, string | undefined>,
  key: string,
  devValue = `${key}-dev-value`
) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === "production") {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}

function getRequiredServerEnvVar(key: string, devValue?: string) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

function getRequiredGlobalEnvVar(
  key: keyof ReturnType<typeof getEnv>,
  devValue?: string
) {
  return getRequiredEnvVarFromObj(ENV, key, devValue);
}

export { getEnv, getRequiredServerEnvVar, getRequiredGlobalEnvVar };
