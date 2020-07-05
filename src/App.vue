<template>
  <div id="app">
    <Navigation />
    <main class="main-container">
      <div class="page-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem;
}

.page-container {
  width: 100%;

  @media screen and (min-width: 992px) {
    max-width: 1130px;
  }
}
</style>
