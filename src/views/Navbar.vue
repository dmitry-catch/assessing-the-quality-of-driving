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
    <div class="Navbar__links">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/edit">Edit</router-link>
    </div>
    <!-- <span @click="toggleTheme" class="Navbar__themeIcon">
      <img src="icons/night-mode.svg" alt="night-mode" height="48" />
    </span> -->
  </div>
</template>

<style>
.Navbar__themeIcon {
  cursor: pointer;
}
</style>
