<template>
  <section class="home">
    <the-header :title="title" />
  </section>
</template>

<script>
import TheHeader from "../UI/TheHeader";
export default {
  name: "Home",
  components: { TheHeader },
  data() {
    return {
      title: "Home"
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>