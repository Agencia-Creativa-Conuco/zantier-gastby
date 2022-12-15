import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import globalStyles from "../components/styles/global-styles";
import logo from "../images/icons/logo.png";
import Header from "./header";
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
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
`;
