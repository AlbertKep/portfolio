<template>
  <section ref="aboutSection" class="about-container">
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
  },
  mounted() {
    this.showRefs();
  },
  methods: {
    showRefs() {
      // console.log(
      //   this.$refs.aboutSection.getBoundingClientRect().top + window.scrollY
      // );
      console.log(window.scrollY);
      console.log(this.$refs.aboutSection.offsetHeight);
    }
  }
};
</script>

<style>
.about-container {
  height: 100vh;
}
</style>