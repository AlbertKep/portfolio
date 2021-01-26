<template>
  <div class="use-container__technologies">
    <div v-for="icon in icons" :key="icon.name" class="icon-container">
      <img class="icon-container__icon" :src="icon.name" alt="vue" />
      <span class="icon-container__title">{{ icon.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Object,
      default: function() {
        return { message: "Technologies" };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.use-container__technologies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.icon-container {
  &__icon {
    display: block;
    width: 1.5em;
    margin: auto;
    padding: 0.2em;
  }
}
</style>