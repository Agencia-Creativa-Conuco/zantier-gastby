import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import globalStyles from "../components/styles/global-styles";
import logo from "../images/icons/logo.png";
import Header from "./header";
import { WhatsappIcon } from "./icons";
import { colors } from "@react-spring/shared";
import { mq } from "./grid";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Zantier Odontología</title>
        <meta
          name="description"
          content="Expertos en sonrisas. Somos una clínica de odontología especializada, donde se proporcionan servicios de salud integral de la mano de la última tecnología."
        />
        <meta name="image" content={logo} />
        <link rel="shortcut icon" href={logo} />
        <link
          rel="preload"
          href="//js.hs-scripts.com/20627890.js"
          as="script"
        ></link>
      </Helmet>

      <Global styles={globalStyles} />
      {/* <!-- Google tag (gtag.js) --> */}
{/* <Content>

<Icons>
  <WhatsappIcon/>
</Icons>
</Content> */}

      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
`;



const Content = styled.div`
  /* position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.5rem 0 0.5rem 1rem;
  gap: 0.5rem;
  justify-content: flex-start;
  ${mq.md} {
    padding-left: 3rem;
  } */
`;



const Icons = styled.span`
position: fixed;
  background-color: ${colors.red.base};
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  color: green;
  display: block;
  z-index: 33678;
  bottom: 0;
    right: 0;

`;

