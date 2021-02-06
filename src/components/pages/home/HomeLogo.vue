<template>
  <header class="logo">
    <h1 class="logo__title">Hello Guest</h1>
    <div
      v-for="line in lines"
      :key="line.name"
      class="logo__line"
      :class="line.class"
    ></div>
  </header>
  <p class="logo__paragraph">Welcome on my website</p>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      lines: [
        { name: "lineTopOne", class: "logo__line logo__line--top-one" },
        { name: "lineTopTwo", class: "logo__line logo__line--top-two" },
        { name: "lineTopThree", class: "logo__line logo__line--top-three" },
        { name: "lineTopFour", class: "logo__line logo__line--top-four" },
        { name: "lineBottomOne", class: "logo__line logo__line--bottom-one" },
        { name: "lineBottomTwo", class: "logo__line logo__line--bottom-two" },
        {
          name: "lineBottomThree",
          class: "logo__line logo__line--bottom-three"
        },
        { name: "lineBottomFour", class: "logo__line logo__line--bottom-four" }
      ]
    };
  },
  mounted() {
    this.animateLogo();
  },
  methods: {
    animateLogo() {
      const tl = gsap.timeline();
      tl.from(".logo__line--top-one, .logo__line--top-two", {
        x: 100,
        duration: 1.2
      })
        .from(
          ".logo__line--top-three, .logo__line--top-four",
          { y: 100, duration: 1.2 },
          "-=1.2"
        )
        .from(
          ".logo__line--bottom-one, .logo__line--bottom-two",
          { x: -100, duration: 1.2 },
          "-=1.2"
        )
        .from(
          ".logo__line--bottom-three, .logo__line--bottom-four",
          { y: -100, duration: 1.2 },
          "-=1.2"
        )
        .from(".logo__title", { opacity: 0 })
        .from(".logo__paragraph", { y: 50, opacity: 0 });
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: 5em;
  height: 5em;
  padding: 4em;
  border: 1px solid;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__title {
    font-size: 2em;
  }

  &__paragraph {
    font-size: 1.5em;
  }

  &__line {
    position: absolute;
    height: 0.2em;
    width: 10em;
    background-color: #fff;

    &--top-one {
      top: 20px;
      left: -50px;
    }

    &--top-two {
      top: -5px;
      left: -35px;
    }
    &--top-three {
      transform: rotate(90deg);
      left: -55px;
      top: 50px;
    }
    &--top-four {
      transform: rotate(90deg);
      top: 35px;
      left: -80px;
    }
    &--bottom-one {
      bottom: 20px;
      right: -50px;
    }

    &--bottom-two {
      bottom: -5px;
      right: -35px;
    }
    &--bottom-three {
      transform: rotate(90deg);
      bottom: 55px;
      right: -50px;
    }
    &--bottom-four {
      transform: rotate(90deg);
      bottom: 35px;
      right: -80px;
    }
  }
}
</style>