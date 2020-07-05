<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="handleTabSelection(index)"
        :class="{ 'active-tab': index === activeIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    // Set the initial active tab
    this.tabs[this.activeIndex].isActive = true;
  },

  methods: {
    handleTabSelection(selectedIndex) {
      this.activeIndex = selectedIndex;

      this.tabs.forEach(
        (tab, index) => (tab.isActive = index === selectedIndex)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  border-bottom: 1px solid $color-divider;

  li {
    padding: 1rem 1.5rem;
    color: $color-font-subtle;
    cursor: pointer;
  }
}

.tabs li.active-tab {
  color: $color-font-primary;
  border-bottom: 2px solid $color-font-primary;
  margin-bottom: -1px;
}
</style>
