<template>
  <base-modal ref="baseModal">
    <template #header>
      Sign up for an account
    </template>

    <template #body>
      <signup-form></signup-form>
    </template>

    <template #footer>
      <p class="modal-footer-text">
        Already have an account?
        <span @click="onLogin" class="modal-link">Log in</span>
      </p>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal.vue';
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    BaseModal,
    SignupForm
  },
  props: {
    onLogin: {
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
