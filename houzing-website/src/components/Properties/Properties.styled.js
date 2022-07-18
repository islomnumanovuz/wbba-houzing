import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  /* max-width: 1440px; */
  max-width: 1336px;
  /* width: 1180px; */
  width: 1076px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

export { Wrapper, Container };
