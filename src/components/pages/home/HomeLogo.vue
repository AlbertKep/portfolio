<template>
  <header class="logo">
    <div class="logo__line logo__line--top-one"></div>
    <div class="logo__line logo__line--top-two"></div>
    <div class="logo__line logo__line--top-three"></div>
    <div class="logo__line logo__line--top-four"></div>
    <h1 class="logo__title">Hello Guest</h1>
    <div class="logo__line logo__line--bottom-one"></div>
    <div class="logo__line logo__line--bottom-two"></div>
    <div class="logo__line logo__line--bottom-three"></div>
    <div class="logo__line logo__line--bottom-four"></div>
  </header>
  <p class="logo__paragraph">Welcome on my website</p>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: 5em;
  height: 5em;
  padding: 4em;
  border: 2px solid #707070;
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