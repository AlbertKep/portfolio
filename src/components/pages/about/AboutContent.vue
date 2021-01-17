<template>
  <p ref="aboutContent" class="about-container__content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
  </p>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      options: {
        root: null,
        threShold: 0.5,
        rootMargin: "0px"
      }
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        entry.target.classList.add("start-animation");
      }
    }, this.options);
    this.observer.observe(this.$refs.aboutContent);
  },
  unmounted() {
    this.observer.disconnect();
  }
};
</script>
<style scoped>
.about-container__content {
  margin-top: 1em;
  padding: 1.5em;
  opacity: 0;
  transform: translateY(0);
  transition: all 0.7s cubic-bezier(0.31, 0.14, 1, 1);
}
.start-animation {
  opacity: 1;
  transform: translateY(50px);
}
</style>