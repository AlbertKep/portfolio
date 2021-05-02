<template>
  <section id="home" class="home">
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
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
@media only screen and (min-width: 768px) {
  .home {
    width: 70%;
    align-items: flex-end;
  }
}
</style>