import styled from "styled-components";

export let Wrapper = styled.div`
  width: 650px;
  display: grid;
  grid-template-columns: auto auto;
  -ms-grid-row-align: center;
  grid-column-gap: 150px;
  grid-row-gap: 50px;
  margin: auto;
  @media (max-width: 700px) {
    width: 550px;
    grid-row-gap: 40px;
    grid-column-gap: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    width: 430px;
  }
  @media (max-width: 470px) {
    width: 270px;
  }
`;
