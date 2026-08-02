export interface PasswordOptions {
  length: number
  useUppercase: boolean
  useLowercase: boolean
  useNumbers: boolean
  useSymbols: boolean
}

export interface PasswordStrength {
  score: 0 | 1 | 2 | 3 | 4
  label: string
  color: string
}
