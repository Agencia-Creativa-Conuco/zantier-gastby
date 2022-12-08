import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "./grid/index";
import HubspotForm from "react-hubspot-form";
import Loading from "./loading";
import colors from "./styles/colors";
import scrollTo from "gatsby-plugin-smoothscroll";

const Form = ({
  formId,
  formIds = [],
  id = "form",
  loadingHeight = "100%",
  cardStyle = true,
  submitedTitle = "¡Gracias por enviar el formulario!",
  submitedText = "Hola, gracias por contactar Universidad ISA, responderemos su requerimiento en cuanto nos sea posible. Siempre a la orden.",
  ...props
}) => {
  const [submited, setSubmited] = useState(false);
  const [active, setActive] = useState(0);
  const [displayedForms, setDisplayedForms] = useState([]);

  const forms = formIds.length ? formIds : [formId];

  const idCuentaHubspot = 19524537;

  const manageFormSubmit = () => {
    // const element = document.getElementById(id);

    if (active < forms.length - 1) {
      setActive(active + 1);
    } else {
      setSubmited(true);
    }

    scrollTo(`#${id}`);
  };

  return (
    <FormSwitcher id={id}>
      {forms.length && !submited ? (
        <>
          {forms.map((form, index) => {
            const isVisible = active === index;

            return isVisible ? (
              <FormContainer
                key={index}
                id={index}
                {...{ cardStyle, ...props }}
                hidden={!isVisible}
              >
                <HubspotForm
                  portalId={idCuentaHubspot}
                  formId={form}
                  onReady={() => {
                    setDisplayedForms(displayedForms.concat(active));
                  }}
                  onFormSubmitted={() => {
                    manageFormSubmit();
                  }}
                  inlineMessage={submitedText}
                  loading={<Loading height={loadingHeight} />}
                />
              </FormContainer>
            ) : null;
          })}
        </>
      ) : (
        <Message id="form">
          <h3>{submitedTitle}</h3>
          <p>{submitedText}</p>
        </Message>
      )}
    </FormSwitcher>
  );
};

export default Form;

const FormSwitcher = styled.div``;

const FormContainer = styled.div`
  ${({ cardStyle }) => css`
    ${cardStyle
      ? css`
          padding: 2rem 0;
          max-width: 60rem;
          margin: 0 auto;
          ${mq.sm} {
            padding: 2rem;
          }
          ${mq.lg} {
            padding: 2rem 0;
          }
        `
      : css``}
  `}
`;

const Message = styled.div``;
