import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import BackgroundImage from "gatsby-background-image";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { animated, Trail, config, Spring } from "@react-spring/web";
import colors from "../../components/styles/colors";
import Cta from "../../components/cta";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../../components/icons";

const HomeContact = () => {
  const images = useFiles();

  const WSCHAT = " https://wa.me/+1";

  const data = {
    title: "Deja tu sonrisa en manos de expertos",
    copy: "Somos una clínica de odontología especializada, donde se proporcionan servicios de salud integral de la mano de la última tecnología, para así ofrecer un cuidado oral de la más alta calidad y brindar una experiencia agradable en un ambiente confortable y acogedor.",
    list: [
      {
        title: "Ubicación: ",
        copy: "Lic. Genaro Perez 48, Santiago De Los Caballeros 51000",
        href: "https://goo.gl/maps/amFZoa6QLdrF1PVR7",
        icon: LocationIcon,
      },
      {
        title: " Whatsapp",
        copy: "809.582.0222",
        href: `${WSCHAT}8095820222`,
        icon: WhatsappIcon,
      },
      {
        title: "Correo",
        copy: "info@zantier.com.do",
        href: "mailto:info@isa.edu.do",
        icon: MailIcon,
      },
      {},
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
                            <Copy>{data.copy}</Copy>
                          </animated.div>
                        )}
                      </Spring>
                      <Trail
                        items={data.list}
                        pause={!inView}
                        config={config.slow}
                        {...FadeUp}
                      >
                        {(item, index) => (styles) => {
                          const Icon = item?.icon;
                          // console.log(item);
                          return (
                            <animated.div style={styles} key={index}>
                              {data.list.length - 1 !== index ? (
                                <Content>
                                  <Icons>
                                    <Icon />
                                  </Icons>
                                  <Item>
                                    <span>{item.title}: </span>

                                    <a href={item.href} target="_blanck">
                                      {item.copy}
                                    </a>
                                  </Item>
                                </Content>
                              ) : (
                                <ButtonBox>
                                  <Cta to="#contacto">Contáctanos</Cta>
                                </ButtonBox>
                              )}
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
  color: ${colors.red.base};

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
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const Item = styled.p`
  margin-bottom: 0;
  align-self: center;
  color: ${colors.red.base};
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    font-weight: 900;
  }
`;

const Icons = styled.span`
  background-color: ${colors.red.base};
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  color: white;
  display: block;
`;

const Copy = styled.p`
  color: ${colors.gray.base};
`;

const ButtonBox = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
