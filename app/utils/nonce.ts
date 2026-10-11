let nonce: string | undefined

export function setNonce(value: string) {
  nonce = value
}

export function getNonce() {
  return nonce
}
