<template>
  <div class="form-kontener">
    <form class="form" @submit.prevent="sendEmail">
      <div class="form__container">
        <input
          id="name"
          v-model="name"
          name="name"
          class="form__input"
          type="text"
          required
        />
        <label class="form__label" for="name">Name:</label>
      </div>
      <div class="form__container">
        <input
          id="email"
          v-model="email"
          name="email"
          class="form__input"
          type="email"
          required
        />
        <label class="form__label" for="email">E-mail:</label>
      </div>
      <div class="form__container">
        <textarea
          id="message"
          v-model="message"
          name="message"
          class="form__message"
          rows="5"
          cols="33"
          required
        ></textarea>
        <label class="form__label" for="message">Your message: </label>
      </div>
      <div class="form__container">
        <button class="form__button">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    formValidation() {
      // if(this.name)
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_d2gs4jb",
          "template_m8fp8io",
          e.target,
          "user_bNcSwBWdyWd3Nsx2R3jYJ",
          {
            name: this.name,
            email: this.email,
            message: this.message
          }
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
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
    position: relative;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    width: 100%;
    font-size: 1em;
    text-align: left;

    &:focus,
    &:valid {
      background-color: transparent;
      outline: none;

      & + label {
        top: -20px;
      }
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
    transition: all 0.5s ease;
    &:hover {
      background-color: #fff;
      color: #242582;
    }
  }
}
</style>