import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header/Header";
import { ImageGrid } from "../components/imageGrid/ImageGrid";
import { requestImagesAction } from "../state/images/imageActions";
import {
  getImages,
  getImagesFetchStatus
} from "../state/images/imageSelectors";
import { uploadImageAction } from "../state/upload/uploadActions";
import { Container, ContentContainer } from "./homepage.styles";

export const Homepage = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const fetchStatus = useSelector(getImagesFetchStatus);

  useEffect(() => {
    dispatch(requestImagesAction.request());
  }, [dispatch]);

  const handleUploadImage = () => {
    console.debug("UPLOAD_IMAGE");
    dispatch(uploadImageAction.request());
  };

  return (
    <Container>
      <Header />
      <ContentContainer>
        <ImageGrid
          images={images}
          fetchStatus={fetchStatus}
          onUploadImage={handleUploadImage}
        />
      </ContentContainer>
    </Container>
  );
};
