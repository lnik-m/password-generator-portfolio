<script setup lang="ts">
import type { PasswordStrength } from '../types'

defineProps<{
  strength: PasswordStrength
}>()
</script>

<template>
  <div class="strength">
    <div class="strength-header">
      <span class="strength-label">Strength:</span>
      <span class="strength-text" :style="{ color: strength.color }">
        {{ strength.label }}
      </span>
    </div>
    <div class="strength-bar">
      <div
          class="strength-fill"
          :style="{
          width: `${(strength.score / 4) * 100}%`,
          backgroundColor: strength.color,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.strength {
  margin-bottom: 24px;
}

.strength-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: var(--space-4);
}

.strength-label {
  color: var(--color-text-muted);
}

.strength-text {
  font-weight: 600;
  transition: color 0.3s;
}

.strength-bar {
  width: 100%;
  height: 6px;
  border-radius: var(--space-4);
  background: var(--color-border-light);
  overflow: hidden;
  transition: background 0.3s;
}

.strength-fill {
  height: 100%;
  border-radius: var(--space-4);
  transition: width 0.4s ease, background-color 0.4s ease;
}
</style>
