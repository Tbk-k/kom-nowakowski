import React from "react";
import { StyledItem, Wrapper } from "./InfoWidget.styles";
import { ReactComponent as CardIcon } from "../../assets/img/card.svg";
import { ReactComponent as GeoIcon } from "../../assets/img/geo-alt.svg";
import { ReactComponent as PhoneIcon } from "../../assets/img/phone.svg";
import { ReactComponent as PlaneIcon } from "../../assets/img/paperPlane.svg";

const InfoWidget = () => {
  const data = [
    {
      id: 0,
      label: "adres",
      value: "ul. Kartuska 422a/6, 80-125 Gdańsk",
      img: <GeoIcon />,
    },
    {
      id: 1,
      label: "nr. telefonu",
      value: "+48 518 050 238",
      img: <PhoneIcon />,
    },
    {
      id: 2,
      label: "adres e-mail",
      value: "gdansk.nowakowski@komornik.pl",
      img: <PlaneIcon />,
    },
    {
      id: 3,
      label: "nr. rachunku",
      value: "52 1600 1462 1895 1220 5000 0001",
      img: <CardIcon />,
    },
  ];

  return (
    <Wrapper>
      {data.map(({ id, label, value, img }) => (
        <StyledItem key={id}>
          <div>
            <h3>{label}</h3> {img}
          </div>
          <p>{value}</p>
        </StyledItem>
      ))}
    </Wrapper>
  );
};

export default InfoWidget;
