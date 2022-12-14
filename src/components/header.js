import React from "react";
import styled from "styled-components";
import useFiles from "../hooks/useFiles";
import FeaturedMedia from "./featured-media";
import Link from "./link";

const URIHEADER = "#inicio";
const Header = () => {
  const images = useFiles();

  console.log("ALGO", images.icons.logo2);

  return (
    <HeaderUI>
      <Logo>
        <Link to={URIHEADER}>
          <FeaturedMedia media={images.icons.logo2} size="100%" />
        </Link>
      </Logo>
    </HeaderUI>
  );
};

export default Header;

const HeaderUI = styled.header`
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 5%;
  top: 1rem;
  width: 4rem;
  transform: translate(0, 0%);
  z-index: 4;
`;
