<template>
  <section id="about" ref="aboutSection" class="about">
    <the-header :title="title" />
    <about-content></about-content>
  </section>
</template>

<script>
import TheHeader from "../../UI/TheHeader";
import AboutContent from "../about/AboutContent";

export default {
  name: "About",
  components: { TheHeader, AboutContent },
  data() {
    return {
      title: "About"
    };
  }
};
</script>

<style>
.about {
  /* height: 100vh; */
  padding: 2em 0.7em;
}
</style>