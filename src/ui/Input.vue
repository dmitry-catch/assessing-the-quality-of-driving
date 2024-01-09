<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  required: Boolean,
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  invalid: Boolean,
  error: String
})

const { required, disabled, placeholder, invalid, error } = props

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="Input__wrapper">
    <div class="Input">
      <div class="Input__label">
        <span class="Input__labelDescription">
          <slot></slot>
        </span>
        <span v-if="required" class="Input__labelRequiredStar warning">*</span>
      </div>
      <input
        type="text"
        class="Input__field"
        v-model="internalValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="invalid ? ['Input__field--invalid', 'warning'] : ''"
      />
    </div>
    <span v-if="invalid" class="Input__error warning">
      {{ error }}
    </span>
  </div>
</template>

<style>
.Input__label {
  font-weight: 700;
}

.Input__field {
  background-color: var(--input-background-color);
  padding: 12px 20px;
  border-radius: 28px;
  border: 0.5px solid var(--input-border-color);
  font-weight: 500;
}

.Input__field:focus {
  outline: none;
}

.Input__field--invalid {
  border-color: var(--input-border-error-color-primary);
}

.Input__field--invalid::placeholder {
  color: var(--text-color-error-tertiary);
}
</style>
