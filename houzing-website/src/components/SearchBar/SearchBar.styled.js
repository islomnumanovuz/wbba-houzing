import styled from "styled-components";

const InputItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

InputItems.Search = styled.div`
  flex: 1;
  input {
    display: inline-block;
  }
`;

export { InputItems };
