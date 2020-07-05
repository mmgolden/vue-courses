<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="login-form" @submit.prevent="handleSubmit(onSubmit)">
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
        autocomplete="current-password"
        rules="required"
        v-model="password"
      ></TextField>
      <BaseButton type="submit" primary>Log in</BaseButton>
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
      password: ''
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  @include form;

  button {
    margin-top: 0.5rem;
  }
}
</style>
