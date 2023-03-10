import React from "react";
import Card from "../card/Card";
import { InnerWrapper, Wrapper } from "./SubpageLinks.styles";
import RewirImg from "../../assets/img/rewir.jpeg";
import FilesImg from "../../assets/img/files.jpeg";
import ContactImg from "../../assets/img/contact-hero.jpeg";

const SubpageLinks = () => {
  const cardContendData = [
    {
      id: 0,
      title: "Rewir Komoriniczy",
      desc: "Kancelaria Komornicza nr XXII w Gdańsku jest zaufanym partnerem w zakresie postępowania egzekucyjnego i zabezpieczającego, działająym na obszarze właściwości Sądu Rejonowego Gdańsk-Południe.",
      link: "",
      img: RewirImg,
      btn: {
        label: "sprawdź rewir komorniczy",
        idle: {
          color: "#ffff",
          bg: "#a18042",
        },
        hover: {
          color: "#fffff",
          bg: "#564524",
        },
      },
    },
    {
      id: 1,
      title: "Wnioski do pobrania",
      desc: "W celu wszczęcia postępowania, należy złożyć stosowny wniosek drogą pocztową lub osobiście w kancelarii po wcześniejszym umówieniu spotkania. Do wniosku należy dołączyć oryginał wyroku zaopatrzony w klauzulę wykonalności.",
      link: "",
      img: FilesImg,
      btn: {
        label: "pobierz wniosek",
        idle: {
          color: "#ffff",
          bg: "rgb(255, 255, 255, 0.3)",
        },
        hover: {
          color: "#000",
          bg: "#ffff",
        },
      },
    },
    {
      id: 2,
      title: "Kontakt z kancelarią",
      desc: "Kancelaria Komornicza nr XXII w Gdańsku czynna jest od poniedziałku do piątku w godzinach 8:00 - 16:00. Komornik Sądowy Marek Nowakowski przyjmuje interesantów we wtorki w godzinach 9:00 - 15:00. W celu umówienia spotkania prosimy o wcześniejszy kontakt telefoniczny lub za pośrednictwem formularza kontaktowego.",
      link: "",
      img: ContactImg,
      btn: {
        label: "skontaktuj się z nami",
        idle: {
          color: "#000",
          bg: "#fff",
        },
        hover: {
          color: "#fff",
          bg: "#4e4e4e",
        },
      },
    },
  ];

  return (
    <Wrapper>
      <InnerWrapper>
        {cardContendData.map(({ ...props }) => (
          <Card key={props.id} {...props}></Card>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
export default SubpageLinks;
