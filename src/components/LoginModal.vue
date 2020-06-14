<template>
  <base-modal>
    <template #header>
      Login to your account
    </template>

    <template #body>
      <p>A form will go here</p>
    </template>

    <template #footer>
      <p>Don't have an account? Sign up</p>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal.vue';

export default {
  components: {
    BaseModal
  }
};
</script>

<style lang="scss" scoped></style>
