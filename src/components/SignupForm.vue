<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="signup-form" @submit.prevent="handleSubmit(onSubmit)">
      <text-field
        label="Email"
        type="email"
        name="email"
        autocomplete="email"
        rules="required|email"
        v-model="email"
      ></text-field>
      <text-field
        label="Password"
        type="password"
        name="password"
        autocomplete="new-password"
        rules="required"
        v-model="password"
      ></text-field>
      <text-field
        label="Confirm password"
        type="password"
        name="confirmPassword"
        rules="required"
        v-model="confirmPassword"
      ></text-field>
      <base-button type="submit" primary>Sign up</base-button>
    </form>
  </ValidationObserver>
</template>

<script>
import TextField from '@/components/form/TextField.vue';

export default {
  components: {
    TextField
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password, this.confirmPassword);
    }
  }
};
</script>

<style lang="scss" scoped>
.signup-form {
  @include form;

  button {
    margin-top: 0.5rem;
  }
}
</style>
