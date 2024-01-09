<script setup>
const props = defineProps({
  disabled: Boolean
})

const { disabled } = props
</script>

<template>
  <button class="Button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style>
.Button {
  color: var(--button-text-color);
  background-color: var(--button-background-color);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 12px 20px;
  border-radius: 28px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.Button:active {
  box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--button-background-pressed-color);
}
</style>
