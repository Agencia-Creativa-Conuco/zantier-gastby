import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import globalStyles from "../components/styles/global-styles";
import logo from "../images/icons/logo.png";
import Header from "./header";
import { WhatsappIcon } from "./icons";
import { mq } from "./grid";
import Link from "./link";
const WSPHONE = "8095820222";
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
          href="//js.hs-scripts.com/19524537.js"
          key="hubspot-lazy-load"
          as="script"
        ></link>
      </Helmet>

      <Global styles={globalStyles} />
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <script id="hs-script-loader" async  defer src="https://js.hs-scripts.com/19524537.js"></script> */}
      <ContentLink to={`https://wa.me/+1${WSPHONE}`} target="_blanck">
        <Icons>
          <WhatsappIcon />
        </Icons>
      </ContentLink>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
`;

const ContentLink = styled(Link)`
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
  width: 2.8rem;
  height: 2.8rem;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  background-color: #25d366;
  box-shadow: 2px 3px 3px #0000004f;
  color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3333;
  ${mq.lg} {
    width: 2rem;
    height: 2rem;
  }

  svg {
    height: 70%;
    width: 70%;
  }
`;
