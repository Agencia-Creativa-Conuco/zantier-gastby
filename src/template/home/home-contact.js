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
    title: "Deja tu sonrisa en manos de expertos",
    copy: "Somos una clínica de odontología especializada, donde se proporcionan servicios de salud integral de la mano de la última tecnología, para así ofrecer un cuidado oral de la más alta calidad y brindar una experiencia agradable en un ambiente confortable y acogedor.",
    list: [
      {
        title: "Ubicación: ",
        copy: "Lic. Genaro Perez 48, Santiago De Los Caballeros 51000",
        href: "https://goo.gl/maps/amFZoa6QLdrF1PVR7",
      },
      {
        title: "Número",
        copy: "809.582.0222",
        href: "tel:8095820222",
      },
      {
        title: "Correo",
        copy: "info@zantier.com.do",
        href: "mailto:info@isa.edu.do",
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
          pause={!inView}
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
                  <Container fluid>
                    <ContentWrapper>
                      <Spring
                        pause={!inView}
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
                        pause={!inView}
                        config={config.molasses}
                        {...FadeUp}
                      >
                        {(item, index) => (styles) => {
                          return (
                            <animated.div style={styles} key={index}>
                              <Content>
                                <Deco />
                                <Copy>
                                  <span>{item.title}: </span>

                                  <a href={item.href} target="_blanck">
                                    {item.copy}
                                  </a>
                                </Copy>
                              </Content>
                            </animated.div>
                          );
                        }}
                      </Trail>
                    </ContentWrapper>
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
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  justify-content: end;
  text-align: initial;
  color: #bc0e03;

  ${mq.md} {
    grid-template-columns: 70%;
  }
  ${mq.lg} {
    grid-template-columns: 50%;
  }
`;

const ContentWrapper = styled.div`
  background-color: rgba(255 255 255 / 80%);
  padding: 2rem;
  border-radius: 2rem;
  ${mq.xl} {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0.5rem 0 0.5rem 1rem;
  gap: 0.5rem;
  justify-content: flex-start;
  ${mq.md} {
    padding-left: 3rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Copy = styled.p`
  margin-bottom: 0;
  align-self: center;
  color: #bc0e03;
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    font-weight: 900;
  }
`;

const Deco = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: #bc0e03;
`;
