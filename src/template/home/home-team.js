import styled from "@emotion/styled";
import React from "react";
import { container, mq } from "../../components/grid/index";
import useFiles from "../../hooks/useFiles";
import { FadeUp } from "../../components/animation/animation";
import { InView } from "react-intersection-observer";
import { Trail, config } from "@react-spring/web";
import CardBody from "../../components/card-body";
const HomeTeam = () => {
  const images = useFiles();


  const data = [
    {
      title: "Dr. Ángel Sánchez",
      specialty: "Estética y Rehabilitación",
      copy: `Experto en estética y rehabilitación oral con implantes, co- propietario de @zantier.odontologia y docente.
      “De mi carrera me gusta verla en diferentes aspectos, la odontología me da la oportunidad de intervenir en algo tan especial como una sonrisa con la intención de mejorarla, pero al mismo tiempo me ha dado el chance de compartir mis conocimientos con colegas de cualquier parte del mundo y a la vez construir juntos a todo el equipo lo que es zantier. Supongo que gran parte de eso que me encanta es esa versatilidad de ejercer mi profesión en diferentes áreas”.
      `,

      featuredImage: images.home.person_1,
    },
    {
      title: "Diana Estévez",
      specialty: " Ortodoncia",
      copy: "Experta en odontología, con especialidad en ortodoncia, cirugía maxilar y ortodoncia lingual. Tiene una gran pasión por los viajes y por conocer culturas nuevas. Se caracteriza por su entusiasmo, buena vibra y profesionalismo.",
      featuredImage: images.home.person_2,
    },
    {
      title: "Dr. Marcos Pichardo",
      specialty: "Rinología y cirugía facial",
      copy: `Experto en en Rinología y cirugía facial, también realizó un Posgrado de Cirugía Oral y Maxilofacial en la Universidad Nacional Autónoma de México.
      Es miembro del consejo mexicano de Cirugía Oral y Maxilofacial. Se encarga de la prevención, diagnóstico, tratamiento, rehabilitación y del estudio de las patologías que se puedan tener en la cavidad oral. También se especializa en armonización orofacial.
      `,

      featuredImage: images.home.person_3,
    },
    {
      title: "Dra. Damelys García",
      specialty: "Odontología General",
      copy: `Experta en Odontología General y coordinadora clínica
      Con su trato amable y su pasión te hace sentir seguro en cada visita.
      `,

      featuredImage: images.home.person_4,
    },
    {
      title: "Dr. Rolando Álvarez",
      specialty: "Periodoncia e Implantología",
      copy: `Experto en Periodoncia e Implantología, con su basta experiencia en cirugía, se encarga de crear las sonrisas funcionales, para que los pacientes que han perdido los motivos para sonreír, puedan hacerlo con mucho orgullo. Su mayor motivación, aparte de la confianza que depositan sus pacientes en él, es poder compartir momentos de calidad con su familia y amigos.`,

      featuredImage: images.home.person_2,
    },
    {
      title: "Dra. Rossy Cabrera",
      specialty: "Ortodoncia y Ortopedia Maxilar",
      copy: "Experta en Ortodoncia y Ortopedia Maxilar. Su pasión y dedicación quedan claros en su trato a cada paciente. Le apasiona aprender algo nuevo cada día. Su mayor motivación es poder perfeccionar sus técnicas y ayudar a los demás a través de su trabajo, a que puedan sentirse más confiados y lograr que sus clientes tengan una sonrisa tan feliz como ellos.",

      featuredImage: images.home.person_4,
    },
    {
      title: "Dra. Esther Estévez",
      specialty: "Odontología Deportiva",
      copy: `Experta en Odontología General especializada en Odontología Deportiva
      Tiene una inmensa pasión por la odontología, por poder devolverle la sonrisa que sus pacientes desean y crear armonía, estética y funcionalidad, al igual que seguir obteniendo conocimientos junto a sus colegas.
      `,

      featuredImage: images.home.person_4,
    },
    {
      title: "Dra. Cindy Lepe",
      specialty: "",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      featuredImage: images.home.person_4,
    },
  ];

  return (
    <Section fluid>
      <InView threshold={0.2}>
        {({ ref, inView }) => (
          <Container ref={ref}>
            <Trail
              items={data}
              reset={inView}
              reverse={!inView}
              config={config.gentle}
              {...FadeUp}
            >
              {(item, index) => (styles) => {
                return (
                  <>
                    <CardBody
                      inView={inView}
                      item={item}
                      styles={styles}
                      key={index}
                    />
                  </>
                );
              }}
            </Trail>
          </Container>
        )}
      </InView>
    </Section>
  );
};

export default HomeTeam;

const Section = styled.section`
  ${container}
  margin-bottom: 6.6rem;

  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0;
  gap: 2rem 5rem;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.md} {
    margin: -5rem auto;
  }

  ${mq.lg} {
    max-width: 1280px;
  }
`;
