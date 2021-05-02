<template>
  <section id="technologies" class="technologies">
    <the-header :title="title" />
    <div class="technologies-container">
      <technologies-subtitle title="Use:" />
      <technologies-list :icons="useIcons" />
    </div>
    <div class="technologies-container">
      <technologies-subtitle title="Future:" />
      <technologies-list :icons="inTheFutureIcons" />
    </div>
  </section>
</template>

<script>
import TheHeader from "../../UI/TheHeader";
import TechnologiesSubtitle from "./TechnologiesSubtitle";
import TechnologiesList from "./TechnologiesList";

import HtmlIcon from "@/assets/use-icons/html5-icon.svg";
import CssIcon from "@/assets/use-icons/css3-icon.svg";
import VueIcon from "@/assets/use-icons/vue-js.svg";
import FireBaseIcon from "@/assets/use-icons/firebase-icon.svg";
import JavaScriptIcon from "@/assets/use-icons/javascript.svg";
import GreenSockIcon from "@/assets/use-icons/gsap-greensock.svg";
import AdobeXdIcon from "@/assets/use-icons/adobe-xd-icon.svg";
import GitIcon from "@/assets/use-icons/git-icon-black.svg";

import NodeJSIcon from "@/assets/in-the-future-icons/nodejs-icon.svg";
import GrapQLIcon from "@/assets/in-the-future-icons/graphql-icon.svg";
import JestIcon from "@/assets/in-the-future-icons/jest-icon.svg";

export default {
  name: "Technologies",
  components: { TheHeader, TechnologiesSubtitle, TechnologiesList },
  data() {
    return {
      title: "Technologies",
      useIcons: [
        { title: "Html5", name: HtmlIcon },
        { title: "Css3", name: CssIcon },
        { title: "Java Script", name: JavaScriptIcon },
        { title: "Vue, Vuex, VueRouter", name: VueIcon },
        { title: "FireBase", name: FireBaseIcon },
        { title: "GSAP", name: GreenSockIcon },
        { title: "Adobe XD", name: AdobeXdIcon },
        { title: "Git", name: GitIcon }
      ],
      inTheFutureIcons: [
        { title: "NodeJS", name: NodeJSIcon },
        { title: "GraphQL", name: GrapQLIcon },
        { title: "Jest", name: JestIcon }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.technologies {
  padding: 1em;
  &__container {
    margin-top: 3em;
  }
}
</style>>

