<template>
  <header class="navigation-header">
    <nav class="navigation-navbar">
      <!-- Title -->
      <router-link to="/" class="navigation-title-link">
        <h1 class="navigation-title">Vue Academy</h1>
      </router-link>

      <!-- Menu -->
      <ul class="navigation-list">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.to">{{ navItem.name }}</router-link>
        </li>
        <li>
          <base-button outline @click="$refs.loginModal.open()">Login</base-button>
        </li>
        <li>
          <base-button primary @click="$refs.signupModal.open()">Sign up</base-button>
        </li>
      </ul>

      <!-- Modals -->
      <login-modal ref="loginModal"></login-modal>
      <signup-modal ref="signupModal"></signup-modal>
    </nav>
  </header>
</template>

<script>
import LoginModal from '@/components/LoginModal.vue';
import SignupModal from '@/components/SignupModal.vue';

export default {
  components: {
    LoginModal,
    SignupModal
  },
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

.navigation-title-link {
  text-decoration: none;
}

.navigation-title {
  @include h1;
}

.navigation-list {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0 0 0 1.875rem;
  list-style: none;

  li {
    margin-right: 32px;

    &:last-of-type {
      margin-right: 0;
    }
  }

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

  li a.router-link-active {
    color: $color-primary;
  }
}
</style>
