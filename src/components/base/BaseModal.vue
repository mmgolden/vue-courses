<template>
  <div class="modal">
    <div class="modal-overlay"></div>

    <div class="modal-dialog">
      <!-- Header -->
      <div class="modal-header">
        <h2 class="modal-title">
          <slot name="header"></slot>
        </h2>
        <base-button>
          <x-icon></x-icon>
        </base-button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <slot name="body"></slot>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons';

export default {
  components: {
    XIcon
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.875rem;
}

.modal-overlay {
  background: $color-modal-overlay;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.modal-dialog {
  background: $color-modal-background;
  z-index: 2;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: $color-modal-shadow;
  width: 100%;

  @media screen and (min-width: 767px) {
    max-width: 400px;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  margin: 0;
}
</style>
