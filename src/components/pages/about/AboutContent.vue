<template>
  <p ref="aboutContent" class="about__content">
    {{ getAboutContent }}
  </p>
</template>

<script>
import animation from "@/mixins/startAnimation";
export default {
  mixins: [animation],
  computed: {
    getAboutContent() {
      return this.$store.state.aboutContent;
    }
  },
  mounted() {
    this.startAnimation(
      this.observerCallback,
      "start-animation",
      this.$refs.aboutContent
    );
    this.getAboutData();
  },

  methods: {
    observerCallback(entry, clss) {
      entry.target.classList.add(clss);
    },
    getAboutData() {
      this.$store.dispatch("getData");
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