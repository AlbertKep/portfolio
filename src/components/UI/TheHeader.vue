<template>
  <div class="container">
    <h2 class="container__title">
      {{ title }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.container {
  // padding: 1em 0 1em 0;
  text-align: left;

  &__title {
    display: inline-block;
    font-size: 2em;
    margin: 1em 0 0 1em;
    border-bottom: solid #fff;
  }
}
</style>