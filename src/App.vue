<script setup lang="ts">
import type { PasswordOptions as PasswordOptionsType } from './types'

import { usePasswordGenerator } from './composables/use-password-generator'
import Button from './components/Button.vue'
import PasswordOptions from './components/PasswordOptions.vue'
import PasswordStrength from './components/PasswordStrength.vue'

const { options, password, copied, strength, generatePassword, copyToClipboard } =
    usePasswordGenerator()
</script>

<template>
  <div class="card">
    <h1 class="title">
      Generate a <br/>
      <span class="highlight">random password</span>
    </h1>
    <p class="subtitle">Never use an insecure password again.</p>

    <div
        class="password-display"
        @click="copyToClipboard"
        role="button"
        tabindex="0"
        :aria-label="copied ? 'Copied!' : 'Click to copy password'"
        @keydown.enter="copyToClipboard"
    >
      <span class="password-text">{{ password }}</span>
      <span class="copy-hint">{{ copied ? 'Copied!' : 'Click to copy' }}</span>
    </div>

    <PasswordStrength :strength="strength" />
    <PasswordOptions
        :options="options"
        @update:options="(value: PasswordOptionsType) => (options = value)"
    />

    <Button class="btn" @click="generatePassword">Generate new password</Button>
  </div>
</template>

<style scoped>
.card {
  max-width: 480px;
  width: 100%;
  padding: var(--space-48) var(--space-32);
  background: var(--color-card);
  border-radius: var(--space-12);
  box-shadow: var(--shadow);
  border: 1px solid var(--color-border);
}

.title {
  margin-bottom: var(--space-8);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
}

.highlight {
  color: var(--color-highlight);
}

.subtitle {
  margin-bottom: var(--space-24);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.password-display {
  cursor: pointer;
  padding: var(--space-16);
  border-radius: var(--space-12);
  background: var(--color-bg);
  border: 2px dashed var(--color-border);
  text-align: center;
  transition: all 0.3s;
  margin-bottom: var(--space-16);
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);
}

.password-display:hover {
  border-color: var(--color-primary-button);
  background: var(--color-primary-button);
  color: var(--color-light);
}

.password-display:hover .copy-hint {
  color: rgba(255, 255, 255, 0.8);
}

.password-text {
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
  word-break: break-all;
  transition: color 0.3s;
}

.copy-hint {
  font-size: 12px;
  color: var(--color-text-muted);
  transition: color 0.3s;
}

.btn {
  width: 100%;
}

@media (max-width: 480px) {
  .card {
    padding: var(--space-32) var(--space-20);
  }
  .title {
    font-size: 24px;
  }
  .subtitle {
    font-size: 14px;
  }
  .password-text {
    font-size: 16px;
  }
}
</style>
