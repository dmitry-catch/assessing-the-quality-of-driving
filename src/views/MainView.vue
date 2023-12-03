<script setup>
import Navbar from '@/views/Navbar.vue'
</script>

<template>
  <div class="MainView">
    <Navbar />
    <div class="MainView__content">
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<style>
.MainView {
  padding: var(--gap-unit);
}
</style>
