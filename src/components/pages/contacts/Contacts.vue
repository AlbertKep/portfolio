<template>
  <section class="contact">
    <the-header :title="title" />
    <contact-form />
  </section>
</template>

<script>
import TheHeader from "../../UI/TheHeader";
import ContactForm from "./ContactsForm";

export default {
  name: "Contacts",
  components: { TheHeader, ContactForm },
  data() {
    return {
      title: "Contacts"
    };
  }
};
</script>
