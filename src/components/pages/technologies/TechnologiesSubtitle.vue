<template>
  <h3 class="technologies__subtitle">{{ title }}</h3>
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
@media only screen and (min-width: 768px) {
  .technologies__subtitle {
    padding-bottom: 1.2em;
    position: relative;
    top: 1em;
    left: 7.5em;
    width: 200px;
  }
}
</style>