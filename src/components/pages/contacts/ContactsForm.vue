<template>
  <form class="form" @submit.prevent="sendEmail">
    <div class="form__container name">
      <input
        id="name"
        v-model.trim="name"
        name="name"
        class="form__input"
        type="text"
        required
        @keyup="formValidation"
      />
      <label class="form__label" for="name">Name:</label>
    </div>
    <div class="form__container email">
      <input
        id="email"
        v-model.trim="email"
        name="email"
        class="form__input"
        type="email"
        required
        @keyup="formValidation"
      />
      <label class="form__label" for="email">E-mail:</label>
    </div>
    <div class="form__container message">
      <textarea
        id="message"
        v-model.trim="message"
        name="message"
        class="form__message"
        rows="5"
        cols="33"
        required
        @keyup="formValidation"
      ></textarea>
      <label class="form__label" for="message">Your message: </label>
    </div>
    <div class="form__container submit-button">
      <button class="form__button" :disabled="!isValid">Send</button>
    </div>
  </form>
  <teleport to="body">
    <contact-modal
      v-if="modalIsOpen"
      :message="modalMessage"
      @showModal="showModal"
    ></contact-modal>
  </teleport>
</template>

<script>
import emailjs from "emailjs-com";

import ContactModal from "./ContactModal";

export default {
  components: { ContactModal },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      patterns: {
        name: /^[\w\sąęćóżź]{3,20}$/,
        email: /^([a-z\d/.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        message: /^[a-zA-Z\d\W]+$/
      },
      isValid: false,
      modalIsOpen: false,
      modalMessage: ""
    };
  },
  methods: {
    formValidation() {
      if (
        this.patterns.name.test(this.name) &&
        this.patterns.email.test(this.email) &&
        this.patterns.message.test(this.message)
      ) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    sendEmail(e) {
      this.modalIsOpen = true;
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
            this.modalMessage = "Thanks for the message sent!";
          },
          error => {
            console.log("FAILED...", error);
            this.modalMessage = "Something went wrong. Please try again!";
          }
        );
      (this.name = ""),
        (this.email = ""),
        (this.message = ""),
        (this.isValid = false);
    },
    showModal() {
      this.modalIsOpen = false;
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
    &:disabled {
      opacity: 0.4;
      &:hover {
        background-color: transparent;
        color: #fff;
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .form {
    display: grid;
    grid-template-columns: 35% 50% 15%;
    grid-template-areas:
      ". name ."
      ". email ."
      ". message ."
      ". button .";
    .name {
      grid-area: name;
    }
    .email {
      grid-area: email;
    }
    .message {
      grid-area: message;
    }
    .submit-button {
      grid-area: button;
    }
  }
}
</style>