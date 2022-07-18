import React from "react";

import { Wrapper, Container } from "./Home.styled";
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
  return (
    <Wrapper>
      <Container>
        <SearchBar />
      </Container>
    </Wrapper>
  );
};

export default Home;
