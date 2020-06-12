<template>
  <div id="app">
    <navigation></navigation>
    <main class="main-container">
      <router-view />
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
  padding: 0 1.875rem;
}
</style>
