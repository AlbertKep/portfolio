<template>
  <li
    v-for="element in menuElements"
    :key="element.name"
    class="menu-container__element"
    @click="toggleMenu"
  >
    {{ element.name }}
  </li>
</template>

<script>
export default {
  props: {
    menuIsActive: {
      type: Boolean,
      required: true
    }
  },
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
  methods: {
    toggleMenu() {
      this.$store.dispatch("menuIsActive", this.menuIsActive);
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container__element {
  cursor: pointer;
  list-style-type: none;
  color: #904beb;
  font-size: 1.7em;
  padding: 0.3em;
}
</style>