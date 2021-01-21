<template>
  <div class="use-container__technologies">
    <img :src="vueIcon" alt="my-logo" />
    <img :src="fireBaseIcon" alt="my-logo" />
    <img :src="javaScriptIcon" alt="my-logo" />
    <img :src="greenSockIcon" alt="my-logo" />

    <span>JS</span>
    <span>Css</span>
    <span>html</span>
    <span>FireBase</span>
  </div>
</template>

<script>
import VueIcon from "../../../assets/vue-js.svg";
import FireBase from "../../../assets/firebase-icon.svg";
import JavaScript from "../../../assets/javascript.svg";
import GreenSock from "../../../assets/gsap-greensock.svg";

export default {
  data() {
    return {
      vueIcon: VueIcon,
      fireBaseIcon: FireBase,
      javaScriptIcon: JavaScript,
      greenSockIcon: GreenSock
    };
  }
};
</script>
<style lang="scss" scoped>
.use-container__technologies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  span {
    display: block;
  }
  img {
    display: block;
    width: 2em;
    height: 2em;
    justify-self: center;
  }
}
</style>