import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import BackgroundImage from "gatsby-background-image";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, Trail, config, Spring } from "@react-spring/web";

const HomeContact = () => {
  const images = useFiles();

  const data = {

    title:"Zantier",
    copy:
      "ZANTIER • Somos una clínica de odontología especializada, donde se proporcionan servicios de salud integral de la mano de la última tecnología, para así ofrecer un cuidado oral de la más alta calidad y brindar una experiencia agradable en un ambiente confortable y acogedor.",
    list: [
      {
        title:"Ubicación: ",
        copy: "Lic. Genaro Perez 48, Santiago De Los Caballeros 51000",
      },
      {
        title:"Número",
        copy: "809.582.0222",
      },
      {
        title: "Correo",
        copy:"info@zantier.com.do",
      },
    ],

    featuredImage: images.home.contact,
  };

  return (
    <InView threshold={0.5}>
      {({ ref, inView }) => (
        <Spring
          from={{
            opacity: 0,
            // transform: `translateY(5rem)`,
          }}
          to={{ opacity: 1, transform: "translateY(0)" }}
          reset={inView}
          reverse={!inView}
          config={config.wobbly}
        >
          {(styles) => (
            <animated.div style={styles}>
              <BImage
                Tag="section"
                fluid={data.featuredImage?.childImageSharp?.fluid}
                id="section_3"
              >
                <Section ref={ref}>
                  <Container>
                    <Spring
                      reset={inView}
                      reverse={!inView}
                      config={config.molasses}
                      {...FadeUp}
                    >
                      {(styles) => (
                        <animated.div style={styles}>
                          <Title>{data.title} </Title>
                          <p>{data.copy}</p>
                        </animated.div>
                      )}
                    </Spring>
                    <Trail
                      items={data.list}
                      reset={inView}
                      reverse={!inView}
                      config={config.molasses}
                      {...FadeUp}
                    >
                      {(item, index) => (styles) => {
                        return (
                          <animated.div style={styles} key={index}>
                            <Content>
                              <Deco />
                              <Copy><span>{item.title}: </span>{item.copy}</Copy>
                            </Content>
                          </animated.div>
                        );
                      }}
                    </Trail>
                  </Container>
                </Section>
              </BImage>
            </animated.div>
          )}
        </Spring>
      )}
    </InView>
  );
};

export default HomeContact;

const BImage = styled(BackgroundImage)`
  overflow: hidden;
`;

const Section = styled.div`
  min-height: 45rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
  ${mq.lg} {
    min-height: 70rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: end;
  text-align: right;
  padding: 0 1.5rem;
  color: #bc0e03;

  ${mq.md} {
    grid-template-columns: 70%;
  }
  ${mq.lg} {
    grid-template-columns: 60%;
  }
`;

const Content = styled.div`
    padding: 1rem 0 1rem 1.5rem;
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: end;
`;

const Title = styled.h2`
  margin-bottom: 4rem;



`;


const Copy = styled.p`
  margin-bottom: 0;
  align-self: center;
  color: #bc0e03;

  span{
  font-weight: 900;

  }
`;

const Deco = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: #bc0e03;
`;
