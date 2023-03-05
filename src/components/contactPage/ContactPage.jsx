import React from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactHero from "./contactHero/ContactHero";
import ContactWidget from "./contactWidget/ContactWidget";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactWidget />
      <ContactForm />
    </>
  );
};

export default ContactPage;
