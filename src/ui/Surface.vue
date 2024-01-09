<script setup></script>

<template>
  <div class="Surface">
    <slot></slot>
  </div>
</template>

<style>
.Surface {
  background-color: var(--surface-background-color);
  border: var(--surface-border-color) 1px solid;
  border-radius: 28px;
  padding: 24px;
  box-sizing: border-box;
  max-height: 100%;
  max-width: 100%;
}
</style>
