import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061DF",
        color: "#FFF",
        border: "none",
      };
    default:
      return {
        border: "1px solid #e6e9ec",
        color: "#fff",
      };
  }
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  line-height: 20px;
  background-color: transparent;
  border-radius: 2px;
  /* height: ${({ height }) => height || "44px"}; */
  /* width: ${({ width }) => (width ? width : "100%")}; */
  margin-top: ${({ mt }) => `${mt}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  ${({ type }) => getType(type)}
  cursor: pointer;
  transition: all 0.2s ease;
  :active {
    outline: none;
    transform: scale(0.98);
    opacity: 0.7;
  }
  color: ${({ color }) => `${color}`};
`;

export { Container };
