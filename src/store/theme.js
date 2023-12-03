import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const themeMode = ref('light')

  function toggleTheme() {
    themeMode.value = themeMode.value == 'light' ? 'dark' : 'light'
  }

  return { themeMode, toggleTheme }
})
