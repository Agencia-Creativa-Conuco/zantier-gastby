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
      copy: `
      <p>Es experto en rehabilitación estética y rehabilitación oral con implantes, co- propietario de @zantier.odontologia y docente.</p>
      <p>“De mi carrera me gusta verla en diferentes aspectos, la odontología me da la oportunidad de intervenir en algo tan especial como una sonrisa con la intención de mejorarla, pero al mismo tiempo me ha dado el chance de compartir mis conocimientos con colegas de cualquier parte del mundo y a la vez construir juntos a todo el equipo lo que es zantier. Supongo que gran parte de eso que me encanta es esa versatilidad de ejercer mi profesión en diferentes áreas”.</p>
      `,
      featuredImage: images.home.person_1,
      contact: "",
    },
    {
      title: "Dra Diana N. Estévez Jiménez",
      specialty: " Ortodoncia",
      copy: `Doctora en odontología  en la Pontificia Universidad Catolica Madre y Maestra, especialista en Ortodoncia de  Universidad Nacional Autónoma de México (UNAM) 2021. Posee un Diplomado en Habilitación Didáctica para Docencia Universitaria (UAPA).`,
      featuredImage: images.home.person_2,
      contact: "dradianaestevezj@gmail.com",
    },
    {
      title: "Dr. Marcos Pichardo",
      specialty: "Experto en cirugía maxilofacial",
      copy: `Tiene una alta Especialidad en Rinología y cirugía facial, también realizó un Posgrado de Cirugía Oral y Maxilofacial en la Universidad Nacional Autónoma de México.
      Es miembro del consejo mexicano de Cirugía Oral y Maxilofacial. Se encarga de la prevención, diagnóstico, tratamiento, rehabilitación y del estudio de las patologías que se puedan tener en la cavidad oral. También se especializa en armonización orofacial.
      
      `,
      featuredImage: images.doctores.Dr_Marcos,
      contact: "Dr.marcospichardo@gmail.com",
    },
    {
      title: "Dra. Damelys García",
      specialty: "Experta Odontología General",
      copy: `
      <p>Conoce a la Dra. Damelys García, Odontología General y coordinadora clínica en @zantier.odontologia. Con su trato amable y su pasión te hace sentir seguro en cada visita.</p>
      <p>“Mi objetivo es adquirir conocimientos nuevos y poder entender el problema de mis pacientes para devolver no solo la estética a los mismos, sino también la funcionalidad que estos necesitan”.</p>
      `,

      featuredImage: images.doctores.Dra_Damelys,
      contact: "",
    },
    {
      title: "Dr. Rolando Alvarez Pérez",
      specialty: "Experto en Periodoncia e implantología",
      copy: `El Dr. Rolando Álvarez, se especializa en Periodoncia e Implantología, con su basta experiencia en cirugía, se encarga de crear las sonrisas funcionales, para que los pacientes que han perdido los motivos para sonreír, puedan hacerlo con mucho orgullo.
      Su mayor motivación, aparte de la confianza que depositan sus pacientes en él, es poder compartir momentos de calidad con su familia y amigos.`,

      featuredImage: images.doctores.Dr_Rolando,
      contact: "rolando.alvarezp@gmail.com",
    },
    {
      title: "Dra. Rossy Cabrera",
      specialty: "Ortodoncia y Ortopedia Maxilar",
      copy: `
      Dra. Rossy Cabrera, especializada en Ortodoncia y Ortopedia Maxilar. Su pasión y dedicación quedan claros en su trato a cada paciente. Le apasiona aprender algo nuevo cada día. Su mayor motivación es poder perfeccionar sus técnicas y ayudar a los demás a través de su trabajo, a que puedan sentirse más confiados y lograr que sus clientes tengan una sonrisa tan feliz como ellos
      `,
      featuredImage: images.home.person_4,
      contact: "Dra.rossycabrera@gmail.com",
    },
    {
      title: "Dra. Esther Estévez",
      specialty: "Experta Odontología General",
      copy: `
      Conoce a la Dra. Esther Estévez, Odontóloga General, especializada en Odontología Deportiva.
      Su energía y entusiasmo están presentes en cada cosa que hace, es una servidora de corazón. Tiene una inmensa pasión por la odontología, por poder devolverle la sonrisa que sus pacientes desean y crear armonía, estética y funcionalidad, al igual que seguir obteniendo conocimientos junto a sus colegas.

      `,

      featuredImage: images.doctores.Dra_Esther,
      contact: "",
    },
    {
      title: "Dra. Cindy Lepe",
      specialty: "Experta en-prótesis dental e implantología",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featuredImage: images.doctores.Dra_Cindy,
      contact: "",
    },
    {
      title: "Dra Melissa Esther Rivera Peña",
      specialty: "Experta en Endodoncia",
      copy: `Especialista y magister en endodoncia, docente universitaria en la UNPHU
      Se encarga de todas las afecciones de la pulpa dental y tejido alrededor de la raíz. 
      `,

      featuredImage: images.doctores.Dra_Melissa,
      contact: "endolearningrd@gmail.com",
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
