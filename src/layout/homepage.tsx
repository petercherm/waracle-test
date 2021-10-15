import React, { useCallback, useEffect, useMemo } from "react";
import { endpoints } from "../api/endpoints";
import { Request } from "../api/request";
import { Header } from "../components/header/Header";
import { Container, ContentContainer } from "./homepage.styles";

export const Homepage = () => {
  const api = useMemo(() => new Request(), []);

  const fetchCats = useCallback(async () => {
    const cats = await api.get(
      `${process.env.REACT_APP_API_URL}${endpoints.IMAGES}`
    );

    console.debug("CATS", cats);
  }, [api]);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  return (
    <Container>
      <Header />
      <ContentContainer>This is the content</ContentContainer>
    </Container>
  );
};
