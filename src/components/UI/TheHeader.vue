<template>
  <div class="header-container">
    <h2 class="header-container__title">
      {{ title }}
    </h2>
    <span class="header-container__title-border"></span>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  text-align: left;

  &__title {
    grid-area: title;
    display: inline-block;
    font-size: 2em;
    margin: 1em 0 0 1em;
    // border-bottom: solid #fff;
    // width: 300px;
  }
  &__title-border {
    grid-area: border;
    height: 0.2em;
    width: 100px;
    background-color: #fff;
    display: block;
    margin-left: 1em;
  }
}
@media only screen and (min-width: 768px) {
  .header-container {
    // text-align: center;
    // width: 70%;
    // margin-left: 2em;
    display: grid;
    grid-template-columns: 30% 20% 50%;
    grid-template-areas:
      ". title ."
      ". border .";

    &__title {
      margin-left: 0.3em;
    }
  }
}
</style>