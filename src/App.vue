<template>
  <Home />
  <About />
  <Technologies />
  <Projects />
  <Contacts />
</template>

<script>
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Technologies from "./components/pages/Technologies.vue";
import Projects from "./components/pages/Projects.vue";
import Contacts from "./components/pages/Contacts.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
    Technologies,
    Projects,
    Contacts,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  background-color: #904beb;
  font-family: "Mukta", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  text-align: center;
}
</style>
