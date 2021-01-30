<template>
  <div
    class="slider__button slider__button--previous"
    @click="previousSlide"
  ></div>
  <div class="slider__button slider__button--next" @click="nextSlide"></div>
</template>

<script>
export default {
  emits: ["next", "previous"],
  methods: {
    previousSlide() {
      this.$emit("previous");
    },
    nextSlide() {
      this.$emit("next");
    }
  }
};
</script>
<style lang="scss" scoped>
.slider__button {
  background-color: #fff;
  border-radius: 10px;
  height: 0.2em;
  width: 4em;
  position: relative;
  cursor: pointer;

  &--previous::before,
  &--previous::after,
  &--next::before,
  &--next::after {
    content: "";
    width: 2em;
    background-color: #fff;
    height: 0.2em;
    display: inline-block;
    position: absolute;
    border-radius: 10px;
  }
  &--previous::before {
    left: 0;
    top: -7px;
    transform: rotate(-25deg);
  }
  &--previous::after {
    left: 0;
    top: 7px;
    transform: rotate(25deg);
  }
  &--next::before {
    right: 0;
    top: -7px;
    transform: rotate(25deg);
  }
  &--next::after {
    right: 0;
    top: 7px;
    transform: rotate(-25deg);
  }
}
</style>