import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/header/Header";
import { requestImages } from "../state/images/imageActions";
import { Container, ContentContainer } from "./homepage.styles";

export const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestImages.request());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <ContentContainer>This is the content</ContentContainer>
    </Container>
  );
};
