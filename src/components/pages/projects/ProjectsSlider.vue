<template>
  <div class="slider">
    <div ref="slider" class="slider__container">
      <div
        v-for="image in images"
        :key="image.name"
        class="slider__single-slide"
      >
        <img :src="image.name" alt="" class="slider__image" />
        <div
          class="slider__project-information"
          :class="{
            'slider__project-information--show': showInformationContainer,
          }"
        >
          <h3 class="slider__project-title">Wisielec</h3>
          <p class="slider__project-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also
          </p>
        </div>
      </div>
    </div>
    <div class="slider__icons-container">
      <img
        class="slider__icon"
        :src="infoIcon"
        alt="information-icon"
        @click="showInfo"
      />
      <img class="slider__icon" :src="gitHubIcon" alt="git-icon" />
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
import InformationIcon from "@/assets/use-icons/info-icon.svg";
import GiTHubIcon from "@/assets/use-icons/git-hub-icon.svg";

// import SliderButtons from "./SliderButtons.vue";
export default {
  components: { SliderButtons },
  data() {
    return {
      infoIcon: InformationIcon,
      gitHubIcon: GiTHubIcon,
      currentSlide: 0,
      images: [
        { name: pictureOne },
        { name: pictureTwo },
        { name: pictureThree }
      ],
      showInformationContainer: false
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
    },
    showInfo() {
      this.showInformationContainer = !this.showInformationContainer;
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
  position: relative;

  &__container {
    display: flex;
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
  &__single-slide {
    position: relative;
  }
  &__project-information {
    height: 0;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    opacity: 0.8;
    transition: all 0.5s ease-in;
    &--show {
      height: 100%;
    }
  }
  &__project-title,
  &__project-content {
    color: #242582;
  }
  &__project-title {
    text-align: left;
    padding: 1em;
  }
  &__project-content {
    padding: 1em;
    font-size: 0.9em;
  }
  &__icons-container {
    position: absolute;
    bottom: 15px;
    left: 0;
    background-color: #fff;
    width: 100%;
    opacity: 0.8;
  }
  &__icon {
    display: inline-block;
    margin: 0.2em 0.5em 0;
    padding: 0.2em;
    cursor: pointer;
  }
  &__buttons-container {
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>