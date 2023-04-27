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
      featuredImage: images.doctores.Dr_Angel,
      contact: "",
      meetTheDoctor:
        "https://www.instagram.com/reel/Cgwkq58lKFX/?utm_source=ig_web_copy_link",
    },
    {
      title: "Dra. Cindy Lepe",
      specialty: "Experta en-prótesis dental e implantología",
      copy: `
        <p>Es Especialista en Prótesis Dental y tiene una Maestría en Rehabilitación con implantes dentales.</p>
        <p>"Una área que me apasiona y es complemento a mi profesión, es la enseñanza; es una forma de hablar de lo que me gusta y salir de la rutina clínica. Soy apasionada con la tecnología, trato de incorporarla tanto en mi ambiente profesional y personal, buscando a través de ella eficientizar procesos y facilitar mi día a día. Hablar en público no es mi fuerte, sin embargo doy lo mejor."</p>
      `,
      featuredImage: images.doctores.Dra_Cindy,
      contact: "",
      meetTheDoctor:
        "https://www.instagram.com/reel/ChH9HyNlkF-/?utm_source=ig_web_copy_link",
    },
    {
      title: "Dr. Marcos Pichardo",
      specialty: "Experto en cirugía maxilofacial",
      copy: `<p>Tiene una alta Especialidad en Rinología y cirugía facial, también realizó un Posgrado de Cirugía Oral y Maxilofacial en la Universidad Nacional Autónoma de México.
      Es miembro del consejo mexicano de Cirugía Oral y Maxilofacial. Se encarga de la prevención, diagnóstico, tratamiento, rehabilitación y del estudio de las patologías que se puedan tener en la cavidad oral. También se especializa en armonización orofacial.</p>`,
      featuredImage: images.doctores.Dr_Marcos,
      contact: "Dr.marcospichardo@gmail.com",
      meetTheDoctor:
        "https://www.instagram.com/reel/CgKGU8uF5Vi/?utm_source=ig_web_copy_link",
    },
    {
      title: "Dra Diana N. Estévez Jiménez",
      specialty: " Ortodoncia",
      copy: `<p>Doctora en odontología  en la Pontificia Universidad Catolica Madre y Maestra, especialista en Ortodoncia de  Universidad Nacional Autónoma de México (UNAM) 2021. Posee un Diplomado en Habilitación Didáctica para Docencia Universitaria (UAPA).</p>`,
      featuredImage: images.doctores.Dra_Diana,
      contact: "dradianaestevezj@gmail.com",
      meetTheDoctor: "https://www.instagram.com/p/CiK1x_BMBae/",
    },
    {
      title: "Dr. Rolando Alvarez Pérez",
      specialty: "Experto en Periodoncia e implantología",
      copy: `<p>El Dr. Rolando Álvarez, se especializa en Periodoncia e Implantología, con su basta experiencia en cirugía, se encarga de crear las sonrisas funcionales, para que los pacientes que han perdido los motivos para sonreír, puedan hacerlo con mucho orgullo.
      Su mayor motivación, aparte de la confianza que depositan sus pacientes en él, es poder compartir momentos de calidad con su familia y amigos.</p>`,

      featuredImage: images.doctores.Dr_Rolando,
      contact: "rolando.alvarezp@gmail.com",
      meetTheDoctor:
        "https://www.instagram.com/reel/Ce64LiSJJSY/?utm_source=ig_web_copy_link",
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
      meetTheDoctor: "https://www.instagram.com/p/CeW82tFluI5/",
    },

    {
      title: "Dra. Esther Estévez",
      specialty: "Experta Odontología General",
      copy: `<p>Conoce a la Dra. Esther Estévez, Odontóloga General, especializada en Odontología Deportiva.
      Su energía y entusiasmo están presentes en cada cosa que hace, es una servidora de corazón. Tiene una inmensa pasión por la odontología, por poder devolverle la sonrisa que sus pacientes desean y crear armonía, estética y funcionalidad, al igual que seguir obteniendo conocimientos junto a sus colegas.</p>`,

      featuredImage: images.doctores.Dra_Esther,
      contact: "",
      meetTheDoctor:
        "https://www.instagram.com/reel/CfXWvvhJXi7/?utm_source=ig_web_copy_link",
    },

    {
      title: "Dra Melissa Esther Rivera Peña",
      specialty: "Experta en Endodoncia",
      copy: `<p>Especialista y magister en endodoncia, docente universitaria en la UNPHU
      Se encarga de todas las afecciones de la pulpa dental y tejido alrededor de la raíz.</p>
      `,

      featuredImage: images.doctores.Dra_Melissa,
      contact: "endolearningrd@gmail.com",
      meetTheDoctor:
        "https://www.instagram.com/reel/ChpkFJKlK1q/?utm_source=ig_web_copy_link",
    },
  ];

  return (
    <Section fluid>
      <InView threshold={0.2}>
        {({ ref, inView }) => (
          <Container fluid ref={ref}>
            <Trail
              items={data}
              pause={!inView}
              config={config.gentle}
              {...FadeUp}
            >
              {(item, index) => (styles) => {
                return (
                  <CardBody
                    inView={inView}
                    item={item}
                    styles={styles}
                    key={index}
                  />
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
  position: relative;
  margin-bottom: 6.6rem;
  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;
const Container = styled.div`
  ${container}
  position: relative;
  display: flex;
  padding: 0;
  gap: 3rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -2.5rem;
`;
