<template>
  <div
    class="menu-container"
    :class="{ 'menu-container--active-menu': menuIsActive }"
  ></div>
  <div class="hamburger-menu" @click="toggleMenu">
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-one': menuIsActive }"
    ></span>
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-two': menuIsActive }"
    ></span>
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-three': menuIsActive }"
    ></span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    menuIsActive() {
      return this.$store.state.menuIsActive;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("menuIsActive");
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  background-color: #fff;
  border-radius: 0 0 0 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  transition: all 0.5s ease-in-out;

  &--active-menu {
    transform: scale(25);
  }
}
.hamburger-menu {
  cursor: pointer;
  width: 10%;
  padding: 1.2em;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  &__element {
    display: block;
    min-height: 2px;
    background-color: #904beb;
    margin-top: 0.4em;
    transition: all 0.5s ease-in-out;
    width: 100%;

    &--active-menu-one {
      width: 100%;
      // background-color: #904beb;
    }
    &--active-menu-two {
      width: 66%;
      // background-color: #904beb;
    }
    &--active-menu-three {
      width: 33%;
      // background-color: #904beb;
    }
  }
}
</style>