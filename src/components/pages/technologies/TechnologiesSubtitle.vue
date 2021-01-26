<template>
  <h3 class="technologies__subtitle">{{ title }}:</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.technologies__subtitle {
  text-align: left;
  font-size: 1.7em;
  padding: 1em;
}
</style>