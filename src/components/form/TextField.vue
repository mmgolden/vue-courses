<template>
  <ValidationProvider :name="label" :rules="rules" v-slot="{ errors }">
    <div class="form-input">
      <label :for="name">{{ label }}</label>
      <input
        v-model="inputValue"
        :type="type"
        :id="name"
        :name="name"
        :autocomplete="autocomplete"
        :class="errors.length > 0 ? 'form-input-error' : undefined"
      />
      <span class="form-error">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: {
      default: 'text',
      type: String
    },
    name: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    rules: {
      type: String
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  height: 94px;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: $color-font-primary;
  }

  input {
    @include input;
  }

  .form-input-error {
    border: 1px solid $color-error;
  }
}

.form-error {
  color: $color-error;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
