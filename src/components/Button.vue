<script setup lang="ts">
interface Emits {
  onClick: () => void
}
const emit = defineEmits<Emits>()
</script>

<template>
  <button class="button" @click="() => emit('onClick')">
    <slot name="icon" />
    <div><slot /></div>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: var(--space-12);
    font-weight: 600;
    font-size: 16px;
    background: var(--color-primary);
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
  }

  .button:hover {
    background: var(--color-primary-hover);
  }

  .button:active {
    transform: translateY(1px) scale(0.98);
  }
</style>
