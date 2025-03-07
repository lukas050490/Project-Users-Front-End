import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  gap: 10px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 380px;

  h3{
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  p{
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
`;

