import React from "react";
import { StyledForm, SubmitBtn, Wrapper } from "./ContactForm.styles";
import { BiPaperPlane } from "react-icons/bi";

const ContactForm = () => {
  const formInputs = [
    { id: 0, type: "text", placeholder: "Imię*", required: true },
    { id: 1, type: "text", placeholder: "Nazwisko" },
    { id: 2, type: "email", placeholder: "Adres email*", required: true },
    { id: 3, type: "phone", placeholder: "Numer telefonu" },
    {
      id: 4,
      type: "textarea",
      placeholder: "Twoja wiadomość*",
      required: true,
    },
  ];

  return (
    <Wrapper>
      <StyledForm>
        {formInputs.map(({ id, ...props }) =>
          props.type === "textarea" ? (
            <textarea key={id} {...props} />
          ) : (
            <input key={id} {...props} />
          )
        )}
        <SubmitBtn>
          <BiPaperPlane /> wyślij
        </SubmitBtn>
      </StyledForm>
    </Wrapper>
  );
};

export default ContactForm;
