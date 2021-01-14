<template>
  <h2 class="title">{{ title }}</h2>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 2em;
  text-align: left;
  padding: 1em 0 0 1em;
  border-bottom: 2px solid #fff;
}
</style>