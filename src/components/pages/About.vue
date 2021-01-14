<template>
  <section class="about-container">
    <the-header :title="title" />
  </section>
</template>

<script>
import TheHeader from "../UI/TheHeader";

export default {
  name: "About",
  components: { TheHeader },
  data() {
    return {
      title: "About"
    };
  }
};
</script>

<style>
.about-container {
  height: 100vh;
}
</style>