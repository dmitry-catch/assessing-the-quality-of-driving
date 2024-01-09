<script setup>
import { ref } from 'vue'

const isChecked = ref(true)
</script>

<template>
  <input class="themeToggler" type="checkbox" v-model="isChecked" />
</template>

<style>
.themeToggler {
  width: 1.5rem;
  height: 1.5rem;
  color: whitesmoke;
  appearance: none;
  outline: none;
  cursor: pointer;
  box-shadow: inset calc(1.5rem * 0.3) calc(1.5rem * -0.23) 0;
  border-radius: 50%;
  transition: all 0.5s;
}
.themeToggler:checked {
  color: orange;
  transform: scale(0.73);
  box-shadow:
    inset 0 0 0 1.5rem,
    calc(calc(1.5rem * 0.65) * -1) 0 0 calc(1.5rem * -0.4),
    calc(1.5rem * 0.65) 0 0 calc(1.5rem * -0.4),
    0 calc(calc(1.5rem * 0.65) * -1) 0 calc(1.5rem * -0.4),
    0 calc(1.5rem * 0.65) 0 calc(1.5rem * -0.4),
    calc(calc(1.5rem * 0.45) * -1) calc(calc(1.5rem * 0.45) * -1) 0 calc(1.5rem * -0.4),
    calc(1.5rem * 0.45) calc(1.5rem * 0.45) 0 calc(1.5rem * -0.4),
    calc(calc(1.5rem * 0.45) * -1) calc(1.5rem * 0.45) 0 calc(1.5rem * -0.4),
    calc(1.5rem * 0.45) calc(calc(1.5rem * 0.45) * -1) 0 calc(1.5rem * -0.4);
}
</style>
