import DefaultButton from "../../components/Button";
import api from "../../services/api";
import { useEffect, useState } from "react";
import TopBackground from "../../components/TopBackground";
import DefaultTitle from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import { Container, ContainerUsers, CardUsers, AvatarUser } from "./styles";



function ListUsers() {
  const navigate = useNavigate();

  const [getUsers, setGetUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios")
      setGetUsers(data)
    }

    getUsers()
  }, [])

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = getUsers.filter(user => user.id !== id)

    setGetUsers(updatedUsers)
  }

  return (
    <Container>
      <TopBackground />
      <DefaultTitle>lista de usuarios</DefaultTitle>
      <ContainerUsers>
        {getUsers.map(user => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <FaTrash size={25} color="#fff" style={{ cursor: "pointer" }} onClick={() => deleteUsers(user.id)}/>
          </CardUsers>
        ))}
      </ContainerUsers>
      <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
    </Container>
  )
}

export default ListUsers;
