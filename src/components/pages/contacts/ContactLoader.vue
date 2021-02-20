<template>
  <div class="loader">
    <span class="loader__dot loader__dot--one"></span>
    <span class="loader__dot loader__dot--two"></span>
    <span class="loader__dot loader__dot--three"></span>
  </div>
</template>
<script>
import gsap from "gsap";

export default {
  mounted() {
    this.animateDots();
  },
  methods: {
    animateDots() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".loader__dot", { duration: 0.7, scale: 0, stagger: 0.25 });
    }
  }
};
</script>
<style lang="scss" scoped>
.loader__dot {
  width: 1em;
  height: 1em;
  background-color: #242582;
  margin: 1em;
  border-radius: 50%;
  display: inline-block;
}
</style>