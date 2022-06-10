import React, { useState } from "react";
import { css, Global } from "@emotion/react";
import { CloseIcon } from "../components/icons";
import colors from "../components/styles/colors";
import { container, mq } from "../components/grid";
import styled from "@emotion/styled";
import { FadeIn, slideDown } from "../components/animation/animation";
import { Spring, animated } from "@react-spring/web";

const useModal = () => {
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
          // config={config.molasses}
          {...FadeIn}
        >
          {(styles) => (
            <animated.div style={styles}>
              <CardModal
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Column>
                  <ModalHeader colors={colors}>
                    <CloseButton onClick={closeModal} colors={colors}>
                      <CloseIcon />
                    </CloseButton>
                  </ModalHeader>
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

export default useModal;

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
    /* opacity: 1; */
    right: 0;
    /* transition: opacity 0.25s ease-out; */
    align-items: baseline;
    justify-content: center;
    animation: opacity ${FadeIn} 0.2s ease-out;
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
  border-radius: 5px;
  animation: ${slideDown} 0.4s ease-out;
  flex: 1;

  padding: 1.5rem;
  ${mq.sm} {
    padding: 3rem;
  }
  ${mq.md} {
    padding: 3.5rem;
  }
  ${mq.xl} {
    padding: 4.5rem;
  }
`;

const Column = styled.div`
  padding: 0 1.5rem;
  display: contents;
`;

const ModalHeader = styled.div`
  ${({ colors }) => css`
    background-color: ${colors.gray.lighter};
    align-self: baseline;
    text-align: left;
    color: ${colors.green.base};
    font-weight: bold;
    margin-bottom: 2rem;
    padding-right: 5rem;
    position: relative;
  `}
`;

const CloseButton = styled.button`
  ${({ colors }) => css`
    background: none;
    border: none;
    box-shadow: none;
    position: absolute;
    color: ${colors ? colors.gray.dark : "#555552"};
    right: 0rem;
    top: 0rem;
    padding: 1rem;
    transform: translate(0, -1rem);
    z-index: 6;
    &:hover {
      cursor: pointer;
      svg {
        transform: scale(1.3);
      }
    }

    svg {
      height: 2rem;
      transition: transform 0.15s ease-in-out;
      fill: currentColor;

      height: 2.5rem;
      width: 2rem;
    }
  `}
`;

const ModalBody = styled.div``;
