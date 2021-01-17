<template>
  <section>
    <the-header :title="title" />
  </section>
</template>

<script>
import TheHeader from "../UI/TheHeader";

export default {
  name: "Contacts",
  components: { TheHeader },
  data() {
    return {
      title: "Contacts"
    };
  }
};
</script>

<style>
</style>