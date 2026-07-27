<script setup lang="ts">
import {ref} from 'vue'
import { generatePassword } from './utils'

const shortPasswordEl = ref('')
const longPasswordEl = ref('')

function handleGeneratePassword() {
  const {shortPassword, longPassword} = generatePassword()
  shortPasswordEl.value = shortPassword;
  longPasswordEl.value = longPassword;
}
</script>

<template>
  <div class="card">
    <h1 class="title">Generate a <br/><span class="highlight">random password</span></h1>
    <h2 class="subtitle">Never use an insecure password again.</h2>

    <button class="btn" @click="handleGeneratePassword">Generate passwords</button>

    <div class="divider"></div>

    <div class="passwords">
      <div class="password">{{ shortPasswordEl }}</div>
      <div class="password">{{ longPasswordEl }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 480px;
  padding: var(--size-112) var(--size-48);
  background-color: var(--light);
}

.title {
  margin-bottom: var(--size-10);
  font-size: var(--size-40);
  font-weight: 600;
  line-height: var(--size-40);
  color: var(--night);
}

.highlight {
  color: var(--muted-teal);
}

.subtitle {
  margin-bottom: var(--size-48);
  font-size: var(--size-20);
  font-weight: 300;
  line-height: var(--size-28);
  color: var(--gray);
}

.btn {
  cursor: pointer;
  margin-bottom: var(--size-36);
  outline: none;
  border: none;
  border-radius: var(--size-6);
  padding: var(--size-10) var(--size-16);
  font-size: var(--size-16);
  line-height: var(--size-24);
  background-color: var(--sea-green);;
  color: var(--white);
}
.btn:hover {
  background-color: var(--dark-spruce);
}

.divider {
  margin-bottom: var(--size-36);
  border-bottom: 1px solid var(--light-gray);
}

.passwords {
  display: flex;
  justify-content: space-between;
  gap: var(--size-16);
}

.password {
  width: 180px;
  height: var(--size-32);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--size-6);
  padding: var(--size-20) var(--size-16);
  font-size: var(--size-16);
  line-height: var(--size-32);
  background-color: var(--night);
  color: var(--white);
}

@media screen and (max-width: 500px) {
  .passwords {
    flex-direction: column;
  }
  .card {
    min-width: 240px;
  }
  .password {
    width: 100%;
    padding: var(--size-24) var(--size-16);
  }
  .btn {
    padding: var(--size-16);
  }
}
</style>
