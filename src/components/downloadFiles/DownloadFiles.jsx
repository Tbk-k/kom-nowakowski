import React from "react";
import {
  DownloadAll,
  FileItem,
  InnerWrapper,
  StyledSection,
} from "./DownloadFiles.styles";
import { SlCloudDownload } from "react-icons/sl";

const DownloadFiles = () => {
  const files = [
    { id: 0, label: "Deklaracja spłaty zadłużenia" },
    { id: 1, label: "Formularz wniosku o wszczęcie egzekucji" },
    { id: 2, label: "Wniosek o wszczęcie egzekucji" },
    { id: 3, label: "Wniosek o wprowadzenie w posiadanie nieruchomości" },
  ];
  return (
    <StyledSection>
      <h2>
        <span>Wnioski</span> do pobrania
      </h2>
      <hr />
      <InnerWrapper>
        {files.map(({ id, label }) => (
          <FileItem
            key={id}
            href="/download/Deklaracja_spłaty_zadłużenia.pdf"
            download="asads.pdf"
          >
            <div>{<SlCloudDownload />}</div>
            <div>
              <h4>{label}</h4>
              <p>pobierz</p>
            </div>
          </FileItem>
        ))}
      </InnerWrapper>
      <DownloadAll>Pobierz wszystkie</DownloadAll>
    </StyledSection>
  );
};

export default DownloadFiles;
