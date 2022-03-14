import React from "react";
import Helmet from "react-helmet";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import globalStyles from "../components/styles/global-styles";

// if (typeof window !== 'undefined') {
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]')
// }

const Layout = ({ children }) => {
  //Si obj no es pasado en props, utiliza page;
  //   const [page] = usePages().filter((page) => page.uri === props.path)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Zantier</title>
        {/* <meta name="description" content={settings.description} /> */}

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
