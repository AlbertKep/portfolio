<template>
  <section class="home">
    <logo />
  </section>
</template>

<script>
import Logo from "./HomeLogo";
export default {
  name: "Home",
  components: { Logo },
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>