<template>
  <BaseModal ref="baseModal">
    <template #header>
      Log in to your account
    </template>

    <template #body>
      <LoginForm />
    </template>

    <template #footer>
      <p class="modal-footer-text">
        Don't have an account?
        <span @click="onSignup" class="modal-link">Sign up</span>
      </p>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    BaseModal,
    LoginForm
  },
  props: {
    onSignup: {
      type: Function,
      required: true
    }
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

.modal-link {
  @include a;
  cursor: pointer;
  font-weight: bold;
}
</style>
