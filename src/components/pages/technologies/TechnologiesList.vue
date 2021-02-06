<template>
  <div ref="technology" class="container__technologies">
    <div v-for="icon in icons" :key="icon.name" class="icon-container">
      <img class="icon-container__icon" :src="icon.name" alt="vue" />
      <span class="icon-container__title">{{ icon.title }}</span>
    </div>
  </div>
</template>

<script>
import animation from "@/mixins/startAnimation";

export default {
  mixins: [animation],
  props: {
    icons: {
      type: Object,
      default: function() {
        return { message: "Technologies" };
      }
    }
  },
  mounted() {
    this.startAnimation(
      this.technologiesAnimation,
      "start-animation",
      this.$refs.technology
    );
  },
  methods: {
    technologiesAnimation(entry) {
      const technologiesList = Array.from(entry.target.children);

      technologiesList.forEach(technology => {
        technology.classList.add("start-animation");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container__technologies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.5em;
}

.icon-container {
  transform: scale(0);
  transition: all 0.5s cubic-bezier(0.31, 0.14, 1, 1);

  &__icon {
    display: block;
    width: 1.2em;
    margin: auto;
    padding: 0.4em 0.2em;
  }
}

.start-animation {
  transform: scale(1);
}
</style>