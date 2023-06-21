import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
Wrapper.NotFound = styled.div`
  color: rgba(0, 0, 0, 0.88);
  font-size: 24px;
  line-height: 1.3333333333333333;
  margin-block: 8px;
  text-align: center;
`;
Wrapper.NotFoundText = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5714285714285714;
  text-align: center;
  margin-bottom: 20px;
`;
