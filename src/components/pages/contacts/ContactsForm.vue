<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form__container">
      <input id="name" class="form__input" type="text" />
      <label class="form__label" for="name">Name:</label>
    </div>
    <div class="form__container">
      <input id="email" class="form__input" type="email" />
      <label class="form__label" for="email">E-mail:</label>
    </div>
    <div class="form__container">
      <textarea
        id="message"
        class="form__message"
        name="message"
        rows="5"
        cols="33"
      ></textarea>
      <label class="form__label" for="message">Your message: </label>
    </div>
    <div class="form__container">
      <button class="form__button">Send</button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    submitForm() {
      alert("Cycuszki Ani i Blerta");
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  padding: 3em;
  &__container {
    position: relative;
    margin-top: 3em;
    text-align: right;
  }
  &__input,
  &__message {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    width: 100%;
    font-size: 1em;
    text-align: left;

    &:focus {
      background-color: transparent;
      outline: none;
    }
    &:focus + label {
      top: -20px;
    }
  }
  &__label {
    position: absolute;
    font-size: 0.7em;
    top: 0;
    display: block;
    transition: all 0.5s ease;
  }
  &__message {
    outline: none;
    text-align: left;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
  }
  &__button {
    background-color: transparent;
    border: 2px solid;
    padding: 0.5em 2em;
  }
}
</style>