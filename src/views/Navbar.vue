<script setup>
import { computed, watch } from 'vue'
import { useThemeStore } from '@/store/theme.js'

const themeStore = useThemeStore()
const themeMode = computed(() => themeStore.themeMode)

const toggleTheme = () => {
  themeStore.toggleTheme()
}

watch(themeMode, () => {
  if (themeMode.value == 'dark') {
    document.body.classList.add('dark-themeMode')
  } else {
    document.body.classList.remove('dark-themeMode')
  }
})
</script>

<template>
  <div class="Navbar">
    <span @click="toggleTheme" class="Navbar__themeIcon">
      <img src="icons/night-mode.svg" alt="night-mode" height="48" />
    </span>
  </div>
</template>

<style>
.Navbar__themeIcon {
  cursor: pointer;
}
</style>
