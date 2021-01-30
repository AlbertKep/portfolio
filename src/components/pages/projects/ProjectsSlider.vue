<template>
  <div class="slider">
    <div ref="slider" class="slider__container">
      <img
        v-for="image in images"
        :key="image.name"
        :src="image.name"
        alt=""
        class="slider__single-slide"
      />
    </div>
  </div>
  <div class="slider__buttons-container">
    <slider-buttons @next="nextSlide" @previous="previousSlide" />
  </div>
</template>

<script>
import SliderButtons from "./ProjectsSliderButtons";
import pictureOne from "../../../assets/1.jpg";
import pictureTwo from "../../../assets/2.jpg";
import pictureThree from "../../../assets/3.jpg";
// import SliderButtons from "./SliderButtons.vue";
export default {
  components: { SliderButtons },
  data() {
    return {
      currentSlide: 0,
      images: [
        { name: pictureOne },
        { name: pictureTwo },
        { name: pictureThree }
      ]
    };
  },
  computed: {
    slideWidth() {
      return this.$refs.slider.clientWidth;
    }
  },
  methods: {
    moveSlide() {
      this.$refs.slider.style.transform = `translateX(-${this.currentSlide *
        this.slideWidth}px)`;
    },
    nextSlide() {
      this.currentSlide =
        this.currentSlide >= this.images.length - 1 ? 0 : this.currentSlide + 1;
      this.moveSlide();
    },
    previousSlide() {
      this.currentSlide =
        this.currentSlide <= 0 ? this.images.length - 1 : this.currentSlide - 1;
      this.moveSlide();
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  margin: 2em auto;
  width: 250px;
  height: 400px;
  overflow: hidden;

  &__container {
    display: flex;
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
  &__single-slide {
    display: block;
    width: 100%;
    height: 100%;
  }
  &__buttons-container {
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>