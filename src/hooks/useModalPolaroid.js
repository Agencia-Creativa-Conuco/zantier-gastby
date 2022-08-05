import React, { useState } from "react";
import { css, Global } from "@emotion/react";
import { CloseIcon } from "../components/icons";
import colors from "../components/styles/colors";
import { container, mq } from "../components/grid";
import styled from "@emotion/styled";
import { FadeIn, slideDown } from "../components/animation/animation";
import { Spring, animated, config } from "@react-spring/web";

const useModalPolaroid = () => {
  const [isModalOpen, setModalOpen] = useState(undefined);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setModalOpen(undefined);
    }, 400);
  };

  const ModalUI = ({ children }) => {
    return (
      <ModalWrapper data-open={isModalOpen} onClick={closeModal}>
        {isModalOpen && <Global styles={{ body: { overflowY: "hidden" } }} />}

        <Spring
          reset={isModalOpen === false && true}
          reverse={!isModalOpen}
          config={config.molasses}
          {...FadeIn}
        >
          {(styles) => (
            <animated.div style={styles}>
              <CardModal
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ModalHeader colors={colors}>
                  <CloseButton onClick={closeModal} colors={colors}>
                    <CloseIcon />
                  </CloseButton>
                </ModalHeader>
                <Column>
                  <ModalBody>{children}</ModalBody>
                </Column>
              </CardModal>
            </animated.div>
          )}
        </Spring>
      </ModalWrapper>
    );
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    ModalUI,
  };
};

export default useModalPolaroid;

const ModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 20000;
  animation: ${FadeIn} 0.2s ease-out;
  display: none;

  &[data-open="true"] {
    display: flex;
    left: 0;
    right: 0;
    align-items: baseline;
    justify-content: center;
    animation: opacity ${FadeIn} 0.2s ease-out;
    & > div {
      margin: 0 1.5rem;
    }
  }

  &[data-open="false"] {
    background: initial;
    animation: opacity ${FadeIn} 5s ease-out;
    display: flex;
  }
`;

const CardModal = styled.div`
  ${container}
  max-width: 69rem !important;
  background: #fff;
  margin: 0 auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
  animation: ${slideDown} 0.4s ease-out;
  flex: 1;
  padding: 1rem 1rem 3rem;
  ${mq.md} {
    padding: 1.9rem 1.9rem 4rem;
  }
`;

const Column = styled.div`
  padding: 0 1.5rem;
  display: contents;
`;

const ModalHeader = styled.div`
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 100%;
  top: -5rem;
  padding: 0.5rem;
  position: absolute;
  right: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  position: absolute;
  color: ${colors.gray.dark};
  right: 0rem;
  top: 0rem;
  position: relative;
  z-index: 6;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.2);
    }
  }

  svg {
    transition: transform 0.15s ease-in-out;
    fill: currentColor;
    height: 1.3rem;
    width: 1.3rem;
  }
`;

const ModalBody = styled.div``;
