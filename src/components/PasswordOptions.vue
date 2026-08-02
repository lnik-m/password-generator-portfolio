<script setup lang="ts">
import type { PasswordOptions } from '../types'

const { options } = defineProps<{
  options: PasswordOptions
}>()

const emit = defineEmits<{
  (e: 'update:options', value: PasswordOptions): void
}>()

function updateOption<K extends keyof PasswordOptions>(
    key: K,
    value: PasswordOptions[K]
) {
  emit('update:options', { ...options, [key]: value })
}
</script>

<template>
  <div class="options">
    <div class="option-group">
      <label for="length-slider" class="option-label">
        Password Length: <span class="length-value">{{ options.length }}</span>
      </label>
      <input
          id="length-slider"
          type="range"
          min="4"
          max="20"
          step="1"
          :value="options.length"
          @input="updateOption('length', Number(($event.target as HTMLInputElement).value))"
          class="slider"
          aria-label="Password length"
      />
    </div>

    <div class="option-group checkboxes">
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="options.useUppercase"
            @change="updateOption('useUppercase', ($event.target as HTMLInputElement).checked)"
        />
        A-Z (Uppercase)
      </label>
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="options.useLowercase"
            @change="updateOption('useLowercase', ($event.target as HTMLInputElement).checked)"
        />
        a-z (Lowercase)
      </label>
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="options.useNumbers"
            @change="updateOption('useNumbers', ($event.target as HTMLInputElement).checked)"
        />
        0-9 (Numbers)
      </label>
      <label class="checkbox-label">
        <input
            type="checkbox"
            :checked="options.useSymbols"
            @change="updateOption('useSymbols', ($event.target as HTMLInputElement).checked)"
        />
        !@#$ (Symbols)
      </label>
    </div>
  </div>
</template>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  margin-bottom: var(--space-24);
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.option-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.length-value {
  font-weight: 700;
  color: var(--color-primary);
  min-width: var(--space-24);
  display: inline-block;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: var(--space-4);
  appearance: none;
  background: var(--color-border-light);
  outline: none;
  transition: background 0.2s;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
  transition: transform 0.2s;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: var(--color-primary);
  cursor: pointer;
}

.checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8) var(--space-16);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  font-size: 14px;
  color: var(--color-text);
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--color-primary-button);
  cursor: pointer;
}

@media (max-width: 480px) {
  .checkboxes {
    grid-template-columns: 1fr;
  }
}
</style>
