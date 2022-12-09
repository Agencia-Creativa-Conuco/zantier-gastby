import React from "react";
import styled from "styled-components";
import useFiles from "../hooks/useFiles";
import FeaturedMedia from "./featured-media";
import { mq } from "./grid";
import Link from "./link";

const URIHEADER = "#inicio";
const Header = () => {
  const images = useFiles();

  return (
    <HeaderUI>
      <Logo>
        <Link to={URIHEADER}>
          <FeaturedMedia media={images.icons.logo2} sizeMd="100%" />
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
  position: fixed;
  left: 1rem;
  top: 1rem;
  width: 5rem;
  transform: translate(0, 0%);
  z-index: 4;

  ${mq.md} {
    left: 3rem;
  }

  &::after {
    content: "";
    position: absolute;
    width: 5.5rem;
    height: 5.5rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 30%;

    z-index: -1;
  }
`;
