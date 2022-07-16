import React from "react";
import { Container } from "./ErrorPage.styled";

export const ErrorPage = () => {
  return (
    <Container>
      <Container.Title>Page Not Found</Container.Title>
      <Container.Subtitle>
        We couldn't find what you were looking for.
      </Container.Subtitle>
      <p>
        Please contact the owner of the site that linked you to the original URL
        and let them know their link is broken.
      </p>
    </Container>
  );
};

export default ErrorPage;
