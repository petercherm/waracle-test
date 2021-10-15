import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header/Header";
import { ImageGrid } from "../components/imageGrid/ImageGrid";
import { requestImages } from "../state/images/imageActions";
import {
  getImages,
  getImagesFetchStatus
} from "../state/images/imageSelectors";
import { Container, ContentContainer } from "./homepage.styles";

export const Homepage = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const fetchStatus = useSelector(getImagesFetchStatus);

  useEffect(() => {
    dispatch(requestImages.request());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <ContentContainer>
        <ImageGrid images={images} fetchStatus={fetchStatus} />
      </ContentContainer>
    </Container>
  );
};
