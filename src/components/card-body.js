import React from "react";
import styled from "@emotion/styled";
import CardInfo from "./card";
import { Spring, animated, config } from "@react-spring/web";
import { mq } from "./grid";
import useModal from "../hooks/useModal.js";
import { FadeUp } from "./animation/animation";
import FeaturedMedia from "./featured-media";
import { h5 } from "./styles/tipography";
import colors from "./styles/colors";

const CardBody = ({ inView, item, styles }) => {
  const { openModal, ModalUI } = useModal();
  return (
    <>
      <animated.div style={styles}>
        <CardContainer>
          <Media onClick={openModal}>
            <Spring pause={!inView} config={config.gentle} {...FadeUp}>
              {(styles) => (
                <animated.div style={styles}>
                  <FeaturedMedia
                    media={item.featuredImage}
                    size="100%"
                    rounded
                  />
                </animated.div>
              )}
            </Spring>
          </Media>

          <Spring pause={!inView} config={config.molasses} {...FadeUp}>
            {(styles) => (
              <animated.div style={styles}>
                <Card onClick={openModal}>
                  <Title>{item.title}</Title>

                  <Spring
                    pause={!inView}
                    delay={1000}
                    from={{
                      opacity: 0,
                    }}
                    to={{ opacity: 1 }}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <Specialty>{item.specialty}</Specialty>
                      </animated.div>
                    )}
                  </Spring>
                </Card>
              </animated.div>
            )}
          </Spring>
        </CardContainer>
      </animated.div>

      <ModalUI>
        <CardInfo item={item} />
      </ModalUI>
    </>
  );
};

export default CardBody;

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  cursor: pointer;
  flex: 1;
  width: 15rem;
  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 50%;
    width: 60%;
    padding-bottom: 60%;
    height: 0;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -0%) scale(1.2);
    z-index: -15;
  }
`;

const Media = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: -1.5rem;
  z-index: 1;
  font-size: 0;
`;

const Card = styled.div`
  background-color: ${colors.gray.light};
  z-index: 2;
  padding: 2rem 2rem;
  padding-top: 2.5rem;
  border-radius: 2rem;
  ${mq.md} {
    max-width: 28rem;
  }
`;

const Title = styled.h3`
  ${h5}
  color: ${colors.red.base};
  text-align: center;
  margin: 0;
`;

const Specialty = styled.p`
  margin: 0;
  color: ${colors.gray.base};
  text-align: center;
`;
