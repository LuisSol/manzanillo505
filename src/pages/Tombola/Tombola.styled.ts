import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  flex-direction: column;
  background: url("/images/manzanillo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Boton = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: purple;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
