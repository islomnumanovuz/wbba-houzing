import styled from "styled-components";

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
  flex-direction: column;
`;

Container.Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 2rem;
`;
Container.Subtitle = styled.h4`
  font-size: 22px;
  margin-bottom: 2rem;
`;
export { Container };
