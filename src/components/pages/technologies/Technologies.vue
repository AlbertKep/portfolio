<template>
  <section class="technologies">
    <the-header :title="title" />
    <div class="use-container">
      <h3 class="use-container__title">Use:</h3>
      <technologies-list />
    </div>
    <div class="use-container">
      <h3 class="use-container__title">In The Future:</h3>
      <technologies-list />
    </div>
  </section>
</template>

<script>
import TheHeader from "../../UI/TheHeader";
import TechnologiesList from "./TechnologiesList";

export default {
  name: "Technologies",
  components: { TheHeader, TechnologiesList },
  data() {
    return {
      title: "Technologies"
    };
  }
};
</script>

<style lang="scss" scoped>
.technologies {
  height: 100vh;
}

.use-container {
  margin-top: 3em;

  &__title {
    text-align: left;
    font-size: 1.7em;
    padding-left: 1em;
  }
}
</style>>

