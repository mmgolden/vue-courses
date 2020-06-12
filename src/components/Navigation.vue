<template>
  <header class="navigation-header">
    <nav class="navigation-navbar">
      <h1 class="navigation-title">Vue Academy</h1>
      <ul class="navigation-list">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.to">{{ navItem.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [{ name: 'Courses', to: '/courses' }]
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.875rem;
  height: 70px;
}

.navigation-navbar {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    max-width: 1130px;
  }
}

.navigation-title {
  margin: 0;
  font-size: 1.5rem;
}

.navigation-list {
  display: flex;
  padding: 0;
  margin: 0 0 0 1.875rem;
  list-style: none;

  a {
    text-decoration: none;
    color: $color-font-primary;
    transition: color 0.3s;
    font-size: 1.125rem;
    font-weight: 600;

    &:hover {
      color: $color-primary;
    }
  }
}
</style>
