<template>
  <the-menu />
  <Home />
  <About />
  <Technologies />
  <Projects />
  <Contacts />
</template>

<script>
import TheMenu from "./components/UI/TheMenu";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Technologies from "./components/pages/technologies/Technologies";
import Projects from "./components/pages/projects/Projects";
import Contacts from "./components/pages/contacts/Contacts";

export default {
  name: "App",
  components: {
    TheMenu,
    Home,
    About,
    Technologies,
    Projects,
    Contacts
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Mukta", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  text-align: center;
}
html {
  scroll-behavior: smooth;
}
#app {
  background-color: #242582;
}
</style>



