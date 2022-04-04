export type FieldProps = {
  /**
   * The validation error message if there is one.
   */
  error?: string
  /**
   * Clears the error message.
   */
  clearError: () => void
  /**
   * Validates the field.
   */
  validate: () => void
  /**
   * The default value of the field, if there is one.
   */
  defaultValue?: any
  /**
   * Whether or not the field has been touched.
   */
  touched: boolean
  /**
   * Helper to set the touched state of the field.
   */
  setTouched: (touched: boolean) => void
}
function getErrorForName(name: string | null) {
  if (!name) return `Name is required`
  if (name.length > 60) return `Name is too long`
  return null
}

async function getErrorForEmail(email: string | null) {
  if (!email) return `Email is required`
  if (!/^.+@.+\..+$/.test(email)) return `That's not an email`

  try {
    const verifierResult = await verifyEmailAddress(email)
    if (!verifierResult.status) {
      return `I tried to verify that email address and got this error message: "${verifierResult.error.message}".`
    }
  } catch (error: unknown) {
    console.error(`There was an error verifying an email address:`, error)
  }

  return null
}

type VerifierResult =
  | { status: true; email: string; domain: string }
  | {
      status: false
      error: { code: number; message: string }
    }
async function verifyEmailAddress(emailAddress: string) {
  const verifierApiKey = process.env.VERIFIER_API_KEY
  if (!verifierApiKey) {
    throw new Error('VERIFIER_API_KEY must be set')
  }
  const verifierUrl = new URL(
    `https://verifier.meetchopra.com/verify/${emailAddress}`
  )
  verifierUrl.searchParams.append('token', verifierApiKey)
  const response = await fetch(verifierUrl.toString())
  const verifierResult: VerifierResult = await response.json()
  return verifierResult
}

function getErrorForSubject(subject: string | null) {
  if (!subject) return `Subject is required`
  if (subject.length <= 5) return `Subject is too short`
  if (subject.length > 120) return `Subject is too long`
  return null
}

function getErrorForBody(body: string | null) {
  if (!body) return `Body is required`
  if (body.length <= 40) return `Body is too short`
  if (body.length > 1001) return `Body is too long`
  return null
}
export {
  getErrorForName,
  getErrorForEmail,
  verifyEmailAddress,
  getErrorForSubject,
  getErrorForBody
}
