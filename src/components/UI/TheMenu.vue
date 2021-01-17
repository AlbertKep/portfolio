<template>
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
        {{ element.name }}
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menuElements: [
        { name: "Home" },
        { name: "About" },
        { name: "Technologies" },
        { name: "Projects" },
        { name: "Contact" }
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
    // color: #904beb;
    color: rgb(2, 0, 36);
    list-style-type: none;
    font-size: 1.7em;
    padding-top: 0.5em;
  }
}
</style>