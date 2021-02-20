<template>
  <div class="modal">
    <div v-if="message" class="modal__container">
      <p class="modal__information">{{ message }}</p>
      <button class="modal__button" @click="$emit('showModal')">Close</button>
    </div>
    <contact-loader v-else />
  </div>
</template>
<script>
import ContactLoader from "./ContactLoader";
export default {
  components: {
    ContactLoader
  },
  props: {
    message: {
      type: String,
      required: true
    }
  },
  emits: ["showModal"]
};
</script>
<style lang="scss" scoped>
.modal {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &__container {
    border: 1px solid #242582;
  }
  &__information,
  &__button {
    color: #242582;
  }
  &__information {
    font-size: 1.3em;
    padding: 0.7em;
  }
  &__button {
    padding: 0.5em 1em;
    margin-bottom: 1em;
    background-color: #fff;
    border: 1px solid #242582;
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: #242582;
      color: #fff;
    }
  }
}
</style>