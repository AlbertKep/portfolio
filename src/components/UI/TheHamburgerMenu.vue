<template>
  <div class="hamburger-menu" @click="isActive = !isActive">
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-one': isActive }"
    ></span>
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-two': isActive }"
    ></span>
    <span
      class="hamburger-menu__element"
      :class="{ 'hamburger-menu__element--active-menu-three': isActive }"
    ></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.hamburger-menu {
  cursor: pointer;
  position: fixed;
  right: 10%;
  top: 10%;
  width: 20%;

  &__element {
    display: block;
    min-height: 2px;
    background-color: #fff;
    margin-top: 0.4em;
    transition: all 0.5s ease-in-out;
    width: 100%;

    &--active-menu-one {
      width: 100%;
    }
    &--active-menu-two {
      width: 66%;
    }
    &--active-menu-three {
      width: 33%;
    }
    // &--active-menu {
    //   width: 100%;
    // }
  }
}
</style>