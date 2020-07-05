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
          <BaseButton outline @click="openLoginModal">
            Log in
          </BaseButton>
        </li>
        <li>
          <BaseButton primary @click="openSignupModal">
            Sign up
          </BaseButton>
        </li>
      </ul>

      <!-- Modals -->
      <LoginModal ref="loginModal" :onSignup="openSignupModal"></LoginModal>
      <SignupModal ref="signupModal" :onLogin="openLoginModal"></SignupModal>
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
  },
  methods: {
    openSignupModal() {
      this.$refs.loginModal.close();
      this.$refs.signupModal.open();
    },
    openLoginModal() {
      this.$refs.signupModal.close();
      this.$refs.loginModal.open();
    }
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
