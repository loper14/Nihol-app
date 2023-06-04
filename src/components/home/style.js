import styled from "styled-components";

export let Wrapper = styled.div`
  display: ${({ isReportCard }) => (isReportCard ? "flex" : "grid")};
  grid-template-columns: auto auto;
  width: 700px;
  grid-row-gap: 50px;
  grid-column-gap: 80px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
