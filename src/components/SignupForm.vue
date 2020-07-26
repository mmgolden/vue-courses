<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="signup-form" @submit.prevent="handleSubmit(onSubmit)">
      <TextField
        label="Email"
        type="email"
        name="email"
        autocomplete="email"
        rules="required|email"
        v-model="email"
      ></TextField>
      <TextField
        label="Password"
        type="password"
        name="password"
        autocomplete="new-password"
        rules="required|password:@Confirm password"
        v-model="password"
      ></TextField>
      <TextField
        label="Confirm password"
        type="password"
        name="confirmPassword"
        rules="required"
        v-model="confirmPassword"
      ></TextField>
      <BaseButton type="submit" primary>Sign up</BaseButton>
    </form>
  </ValidationObserver>
</template>

<script>
import TextField from '@/components/form/TextField.vue';
import { extend } from 'vee-validate';
import axios from 'axios';

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});

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
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        )
        .then(response => console.log('success', response))
        .catch(error => console.log('failed', error));
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
