import React from "react";
import Card from "../card/Card";
import { Wrapper } from "./SubpageLinks.styles";
import { HiOutlineMap } from "react-icons/hi2";
import { BsFiles } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

const SubpageLinks = () => {
  const cardContendData = [
    {
      id: 0,
      title: "Rewir Komoriniczy",
      desc: "Kancelaria Komornicza nr XXII w Gdańsku jest zaufanym partnerem w zakresie postępowania egzekucyjnego i zabezpieczającego, działająym na obszarze właściwości Sądu Rejonowego Gdańsk-Południe.",
      link: "",
      img: <HiOutlineMap />,
    },
    {
      id: 1,
      title: "Wnioski do pobrania",
      desc: "W celu wszczęcia postępowania, należy złożyć stosowny wniosek drogą pocztową lub osobiście w kancelarii po wcześniejszym umówieniu spotkania. Do wniosku należy dołączyć oryginał wyroku zaopatrzony w klauzulę wykonalności.",
      link: "",
      img: <BsFiles />,
    },
    {
      id: 2,
      title: "Kontakt z kancelarią",
      desc: "Kancelaria Komornicza nr XXII w Gdańsku czynna jest od poniedziałku do piątku w godzinach 8:00 - 16:00. Komornik Sądowy Marek Nowakowski przyjmuje interesantów we wtorki w godzinach 9:00 - 15:00. W celu umówienia spotkania prosimy o wcześniejszy kontakt telefoniczny lub za pośrednictwem formularza kontaktowego.",
      link: "",
      img: <BiMessageSquareDetail />,
    },
  ];

  return (
    <Wrapper>
      {cardContendData.map(({ id, ...props }) => (
        <Card key={id} {...props}></Card>
      ))}
    </Wrapper>
  );
};
export default SubpageLinks;
