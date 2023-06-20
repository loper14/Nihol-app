import styled from "styled-components";

export let Wrapper = styled.div`
  display: ${({ isReportCard }) => (isReportCard ? "flex" : "grid")};
  grid-template-columns: auto auto;
  width: 700px;
  grid-row-gap: 50px;
  grid-column-gap: 150px;
  margin: 0 auto;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 500px;
    grid-row-gap: 40px;
    grid-column-gap: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    width: 400px;
  }
  @media (max-width: 470px) {
    width: 300px;
  }
`;
