import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import globalStyles from "../components/styles/global-styles";
import logo from "../images/icons/logo.png";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Zantier</title>
        <meta
          name="description"
          content="Somos Zantier, Clínica de Odontología Integral comprometidos con tu salud y bienesta"
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

      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
`;
