import {useRef} from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Container, Form, ContainerInputs, Input, InputLabel } from "./styles";

import TopBackground from "../../components/TopBackground";
import DefaultButton from "../../components/Button";
import DefaultTitle from "../../components/Title";



function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post("/usuarios",{
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    })

    console.log(data)
  }


  return (
    <Container>
      <TopBackground/>
      <Form>
        <DefaultTitle>Cadastrar Usuários</DefaultTitle>
        <ContainerInputs>

          <div>
            <InputLabel>Name<span>*</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
          </div>
          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
          </div>

        </ContainerInputs>
        <div style={{width:'100%'}}>
          <InputLabel>Email<span>*</span></InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
        </div>

        <DefaultButton type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</DefaultButton>
      </Form>
      <DefaultButton type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Lista de Usuários</DefaultButton>
    </Container>
  )
}

export default Home
