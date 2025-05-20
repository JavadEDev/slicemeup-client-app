import React from "react";
import { useFormStatus } from "react-dom";

function ContactInput(props) {
  const { pending } = useFormStatus;
  return (
    <input
      disabled={pending}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      {...props}
    />
  );
}

export default ContactInput;
