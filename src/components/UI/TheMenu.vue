<template>
  <div
    class="menu-container"
    :class="{ 'menu-container--show-menu': menuIsActive }"
  >
    <ul class="menu-container__list">
      <the-menu-element :is-Active="menuIsActive" />
    </ul>
  </div>
</template>
<script>
import TheMenuElement from "./TheMenuElement";
export default {
  components: {
    TheMenuElement
  },
  computed: {
    menuIsActive() {
      return this.$store.state.menuIsActive;
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  width: 0;
  // opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #fff;
  transition: all 0.5s ease-in-out;

  &--show-menu {
    width: 100%;
    // opacity: 1;
  }
}
</style>