<script setup lang="ts">
import {ref} from 'vue'

const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
  "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
  "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const shortPasswordEl = ref('')
const longPasswordEl = ref('')

let passwordLength = {
  short: 12,
  long: 15,
};

function getRandomCharacter() {
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

function generatePassword() {
  let shortPassword = "";
  for (let i = 0; i < passwordLength.short; i++) {
    shortPassword += getRandomCharacter();
  }
  shortPasswordEl.value = shortPassword;

  let longPassword = "";
  for (let i = 0; i < passwordLength.long; i++) {
    longPassword += getRandomCharacter();
  }
  longPasswordEl.value = longPassword;
}
</script>

<template>
  <div class="card">
    <h1 class="title">Generate a <br/><span class="highlight">random password</span></h1>
    <h2 class="subtitle">Never use an insecure password again.</h2>

    <button class="btn" @click="generatePassword">Generate passwords</button>

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
