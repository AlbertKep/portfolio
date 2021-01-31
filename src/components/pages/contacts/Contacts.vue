<template>
  <section class="contacts">
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

<style>
.contacts {
  height: 100vh;
}
</style>