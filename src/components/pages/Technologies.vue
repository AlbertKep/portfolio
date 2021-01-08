<template>
  <section>
    <the-header :title="title" />
  </section>
</template>

<script>
import TheHeader from "../UI/TheHeader";

export default {
  name: "Technologies",
  components: { TheHeader },
  data() {
    return {
      title: "Technologies",
    };
  },
};
</script>

<style>
</style>