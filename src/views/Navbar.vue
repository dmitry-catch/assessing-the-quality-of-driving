<script setup>
import { computed, watch } from 'vue'
import { useThemeStore } from '@/store/theme.js'
import ThemeToggler from '@/ui/ThemeToggler.vue'

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
    <div class="Navbar__header">
      <ThemeToggler @click="toggleTheme" class="Navbar__themeIcon" />
      <span>Click icon to toggle theme</span>
    </div>

    <div class="Navbar__links">
      <router-link to="/ui" class="Navbar__link"><span class="Navbar__item">UI</span></router-link>
    </div>
  </div>
</template>

<style>
.Navbar__themeIcon {
  cursor: pointer;
}

.Navbar__header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.Navbar__link {
  text-decoration: none;
}

.Navbar__item {
  font-weight: 700;
}

.Navbar__links {
  padding: 36px 0;
}
</style>
