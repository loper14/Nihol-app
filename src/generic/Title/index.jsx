import { Title } from "../style/style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import back from "../../assets/imgs/back-icon.png";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`;

const TitleHandler = ({ title = "Not provided", showBackIcon = true }) => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      {showBackIcon && (
        <img
          src={back}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer", width: "35px", height: "35px" }}
          alt="<"
        />
      )}
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default TitleHandler;
