<template>
  <button class="button">
    <slot name="icon" />
    <div><slot /></div>
  </button>
</template>

<style scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    padding: var(--space-12) var(--space-24);
    border-radius: var(--space-12);
    font-weight: 600;
    font-size: 16px;
    background: var(--color-primary-button);
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
  }

  .button:hover {
    background: var(--color-primary-button-hover);
  }

  .button:active {
    transform: translateY(1px) scale(0.98);
  }
</style>
