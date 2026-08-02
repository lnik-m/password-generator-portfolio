import { ref, computed, watch } from 'vue'
import type { PasswordOptions, PasswordStrength } from '../types'

const CHARACTERS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '~`!@#$%^&*()_-+={}[]|:;<>.?/',
}

export function usePasswordGenerator() {
  const options = ref<PasswordOptions>({
    length: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: false,
  })

  const password = ref('')
  const copied = ref(false)

  const availableChars = computed(() => {
    let chars = ''
    if (options.value.useUppercase) chars += CHARACTERS.uppercase
    if (options.value.useLowercase) chars += CHARACTERS.lowercase
    if (options.value.useNumbers) chars += CHARACTERS.numbers
    if (options.value.useSymbols) chars += CHARACTERS.symbols
    return chars
  })

  function generatePassword() {
    const chars = availableChars.value
    if (!chars) {
      password.value = 'Select at least one character type'
      return
    }

    let result = ''
    for (let i = 0; i < options.value.length; i++) {
      const index = Math.floor(Math.random() * chars.length)
      result += chars[index]
    }
    password.value = result
    copied.value = false
  }

  const strength = computed<PasswordStrength>(() => {
    const { length } = options.value
    const typesCount = [
      options.value.useUppercase,
      options.value.useLowercase,
      options.value.useNumbers,
      options.value.useSymbols,
    ].filter(Boolean).length

    let score: 0 | 1 | 2 | 3 | 4 = 0
    let label = ''
    let color = ''

    if (length < 8) {
      score = 0
      label = 'Weak'
      color = 'var(--color-weak)'
    } else if (length < 10 || typesCount < 2) {
      score = 1
      label = 'Fair'
      color = 'var(--color-fair)'
    } else if (length < 14 || typesCount < 3) {
      score = 2
      label = 'Good'
      color = 'var(--color-good)'
    } else if (length < 18 || typesCount < 4) {
      score = 3
      label = 'Strong'
      color = 'var(--color-strong)'
    } else {
      score = 4
      label = 'Very Strong'
      color = 'var(--color-very-strong)'
    }

    return { score, label, color }
  })

  async function copyToClipboard() {
    if (!password.value) return
    try {
      await navigator.clipboard.writeText(password.value)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  watch(options, () => generatePassword(), { deep: true })

  generatePassword()

  return {
    options,
    password,
    copied,
    strength,
    generatePassword,
    copyToClipboard,
  }
}
