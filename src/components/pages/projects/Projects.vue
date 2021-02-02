<template>
  <section class="projects">
    <the-header :title="title" />
    <slider />
  </section>
</template>

<script>
import TheHeader from "../../UI/TheHeader";
import Slider from "./ProjectsSlider";

export default {
  name: "Projects",
  components: { TheHeader, Slider },
  data() {
    return {
      title: "Projects"
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  // height: 100vh;
  padding: 2em 0.7em;
}
</style>