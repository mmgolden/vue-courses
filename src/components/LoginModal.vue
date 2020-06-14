<template>
  <base-modal ref="baseModal">
    <template #header>
      Log in to your account
    </template>

    <template #body>
      <login-form></login-form>
    </template>

    <template #footer>
      <p class="modal-footer-text">Don't have an account? Sign up</p>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    BaseModal,
    LoginForm
  },
  methods: {
    close() {
      this.$refs.baseModal.close();
    },
    open() {
      this.$refs.baseModal.open();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-footer-text {
  @include p;
  margin-top: 0.5rem;
}
</style>
