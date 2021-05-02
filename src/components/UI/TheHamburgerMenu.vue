<template>
  <div
    class="menu-container"
    :class="{ 'menu-container--active-menu': menuIsActive }"
  ></div>
  <div class="hamburger-menu" @click="toggleMenu">
    <span
      class="hamburger-menu__element hamburger-menu__element--one"
      :class="{ 'hamburger-menu__element--active-menu-one': menuIsActive }"
    ></span>
    <span class="hamburger-menu__element hamburger-menu__element--two"></span>
    <span
      class="hamburger-menu__element hamburger-menu__element--three"
      :class="{ 'hamburger-menu__element--active-menu-three': menuIsActive }"
    ></span>
  </div>
</template>
<script>
import gsap from "gsap";

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
      this.menuIsActive ? this.openMenu() : this.closeMenu();
    },
    openMenu() {
      const timelineOpenMenu = gsap.timeline();
      timelineOpenMenu
        .to(".hamburger-menu__element--two", {
          x: -40,
          duration: 0.1,
          opacity: 0
        })
        .to(".hamburger-menu__element--one", { y: 8 }, "-=1")
        .to(".hamburger-menu__element--three", { y: -8 }, "-=1")
        .to(".hamburger-menu__element--one", { rotation: 35 }, "-=1.5")
        .to(".hamburger-menu__element--three", { rotation: -35 }, "-=1.5");
    },
    closeMenu() {
      const timelineCloseMenu = gsap.timeline();
      timelineCloseMenu
        .to(".hamburger-menu__element--two", {
          x: 0,
          duration: 0.1,
          opacity: 1
        })
        .to(
          ".hamburger-menu__element--one, .hamburger-menu__element--three",
          {
            y: 0
          },
          "-=1.2"
        )
        .to(
          ".hamburger-menu__element--one, .hamburger-menu__element--three",
          {
            rotation: 0
          },
          "-=1.2"
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  z-index: 1;
  background-color: #fff;
  border-radius: 0 0 0 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 125px;
  height: 125px;
  transition: all 0.5s ease-in-out;

  &--active-menu {
    transform: scale(25);
  }
}
.hamburger-menu {
  cursor: pointer;
  width: 10%;
  padding: 2em;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  &__element {
    display: block;
    min-height: 2px;
    background-color: #242582;
    margin-top: 0.4em;
    transition: all 0.5s ease-in-out;
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .menu-container,
  .hamburger-menu {
    display: none;
  }
}
</style>