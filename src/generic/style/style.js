import styled from "styled-components";

export let Title = styled.div`
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px 0;
  @media (max-width: 470px) {
    font-size: 30px;
  }
`;
export let DropDownItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  font-size: 14px;
`;

export let CardWrapper = styled.div`
  width: 650px;
  display: grid;
  grid-template-columns: auto auto;
  -ms-grid-row-align: center;
  grid-column-gap: 150px;
  grid-row-gap: 50px;
  padding-bottom: 30px;
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
