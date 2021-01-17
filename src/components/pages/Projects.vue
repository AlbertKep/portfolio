<template>
  <section>
    <the-header :title="title" />
  </section>
</template>

<script>
import TheHeader from "../UI/TheHeader";

export default {
  name: "Projects",
  components: { TheHeader },
  data() {
    return {
      title: "Projects"
    };
  }
};
</script>

<style>
</style>