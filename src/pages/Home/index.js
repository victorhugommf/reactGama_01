import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);
  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        // console.log(repositories);

        const repositoriesName = [];
        repositories.map((repositories) => {
          repositoriesName.push(repositories.name);
        });

        localStorage.setItem("repositoryName", JSON.stringify(repositoriesName));
        setErro(false);
        navigate("/repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input type='text' placeholder='usuario' name='usuario' id='usuario' className='usuarioInput' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <S.Button type='button' onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu algum erro, tente novamente.</S.ErrorMsg> : ""}
    </S.HomeContainer>
  );
}
