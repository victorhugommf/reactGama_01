import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoryName");

    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      console.log(repositories);
      localStorage.clear();
      console.log(repositories);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repository) => {
          return <S.ListItem>Repositório: {repository}</S.ListItem>;
        })}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  );
}
