<template>
  <p ref="aboutContent" class="about__content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry's standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it to make a type
    specimen book. Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
  </p>
</template>

<script>
import animation from "@/mixins/startAnimation";
export default {
  mixins: [animation],

  mounted() {
    this.startAnimation(
      this.observerCallback,
      "start-animation",
      this.$refs.aboutContent
    );
  },
  methods: {
    observerCallback(entry, clss) {
      entry.target.classList.add(clss);
    }
  }
};
</script>
<style scoped>
.about__content {
  margin-top: 0.5em;
  padding: 1em;
  opacity: 0;
  transform: translateY(0);
  transition: all 1.5s cubic-bezier(0.31, 0.14, 1, 1);
}
.start-animation {
  opacity: 1;
  transform: translateY(40px);
}
</style>