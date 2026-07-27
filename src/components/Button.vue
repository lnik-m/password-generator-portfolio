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
    padding: 14px 16px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    background: var(--bg-gradient);
    cursor: pointer;
  }

  .button:hover {
    background: var(--bg-gradient-hover);
  }

  .button:active {
    transform: translateY(1px);
  }
</style>
