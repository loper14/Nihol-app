import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
`;
Wrapper.Container = styled.div`
  width: 100%;
  margin-top: 16px;
  border: 1px solid #f0f0f0;
  padding: 24px;
  border-radius: 8px;
`;
Wrapper.Label = styled.div`
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
Wrapper.Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
Wrapper.LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
Wrapper.Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.85);
  transition: background-color 0.3s ease 0s;
  cursor: pointer;
  :hover {
    background-color: rgb(245, 245, 245);
  }
`;
Wrapper.LabelDate = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5714285714285714;
  text-align: start;
  padding-bottom: 8px;
`;
Wrapper.Date = styled.div`
  flex: 1;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  word-break: break-word;
  overflow-wrap: break-word;
`;
Wrapper.Item = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.DropdownItem = styled.div`
  font-size: 15px;
  color: ${({ danger }) => (danger ? "red" : "rgb(0, 0, 0)")};
  display: flex;
  grid-gap: 8px;
`;
