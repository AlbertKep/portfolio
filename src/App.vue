<template>
  <the-hamburger-menu />
  <Home />
  <About />
  <Technologies />
  <Projects />
  <Contacts />
</template>

<script>
import TheHamburgerMenu from "./components/UI/TheHamburgerMenu";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Technologies from "./components/pages/Technologies";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";

export default {
  name: "App",
  components: {
    TheHamburgerMenu,
    Home,
    About,
    Technologies,
    Projects,
    Contacts,
  },
};
</script>

<style lang="scss">
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
