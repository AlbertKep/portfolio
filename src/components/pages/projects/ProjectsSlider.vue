<template>
  <div class="slider" :class="{ 'rotate-slider': isActive }">
    <img class="slider__image" :src="slide" alt="" />
  </div>
  <div class="control-buttons">
    <button class="prev" aria-label="<" @click="prevSlide">&larr;</button>
    <button class="next" aria-label=">" @click="nextSlide">&rarr;</button>
    <slider-buttons />
  </div>
</template>
<script>
import sliderButtons from "./SliderButtons";
export default {
  components: { sliderButtons },
  data() {
    return {
      currentSlide: 0,
      projectsImages: [
        {
          src:
            "https://images.unsplash.com/photo-1611696380152-186b7265b7be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
          src:
            "https://images.unsplash.com/photo-1611690132358-e493f29c6230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
        },
        {
          src:
            "https://images.unsplash.com/photo-1611787645343-84498fbab26c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
      ],
      isActive: false
    };
  },
  computed: {
    slide() {
      return this.projectsImages[this.currentSlide].src;
    }
  },
  methods: {
    nextSlide() {
      this.isActive = true;

      setTimeout(() => {
        if (this.currentSlide >= this.projectsImages.length - 1) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
      }, 500);

      this.resetRotateClass();
    },

    prevSlide() {
      this.isActive = true;

      setTimeout(() => {
        if (this.currentSlide <= 0) {
          this.currentSlide = this.projectsImages.length - 1;
        } else {
          this.currentSlide--;
        }
      }, 500);

      this.resetRotateClass();
    },
    resetRotateClass() {
      setTimeout(() => {
        this.isActive = false;
      }, 900);
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 250px;
  height: 400px;
  background-color: #fff;
  margin: 2em auto;
  transition: all 1s ease-out;

  &__image {
    width: 100%;
    height: 100%;
  }
}
.rotate-slider {
  animation: rotate 1s alternate;
}

button {
  height: 2em;
  width: 2em;
  background-color: transparent;
  border: none;
}

@keyframes rotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>