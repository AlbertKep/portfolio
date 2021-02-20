<template>
  <the-hamburger-menu ref="hamburgerMenu" />
  <nav
    class="menu-container"
    :class="{ 'menu-container--show-menu': menuIsActive }"
  >
    <ul>
      <li
        v-for="element in menuElements"
        :key="element.name"
        class="menu-container__element"
        @click="toggleMenu"
      >
        <a :href="element.id">{{ element.name }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import TheHamburgerMenu from "./TheHamburgerMenu";

export default {
  components: {
    TheHamburgerMenu
  },
  data() {
    return {
      menuElements: [
        { name: "Home", id: "#home" },
        { name: "About", id: "#about" },
        { name: "Technologies", id: "#technologies" },
        { name: "Projects", id: "#projects" },
        { name: "Contact", id: "#contacts" }
      ]
    };
  },
  computed: {
    menuIsActive() {
      return this.$store.state.menuIsActive;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("menuIsActive", this.menuIsActive);
      this.$refs.hamburgerMenu.closeMenu();
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);

  transition: all 0.6s ease-in-out;

  &--show-menu {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  &__element {
    list-style-type: none;
    font-size: 1.7em;
    padding-top: 0.5em;

    a {
      color: #242582;
      text-decoration: none;
    }
  }
}
</style>