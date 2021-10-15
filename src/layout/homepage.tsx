import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header/Header";
import { ImageGrid } from "../components/imageGrid/ImageGrid";
import { requestImagesAction } from "../state/images/imageActions";
import {
  getImages,
  getImagesFetchStatus
} from "../state/images/imageSelectors";
import { uploadImageAction } from "../state/upload/uploadActions";
import {
  Container,
  ContentContainer,
  HiddenFileInput
} from "./homepage.styles";

export const Homepage = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const fetchStatus = useSelector(getImagesFetchStatus);
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(requestImagesAction.request());
  }, [dispatch]);

  const handleAddImage = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const handleUploadImage = (event: any) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    dispatch(uploadImageAction.request(formData));
  };

  return (
    <Container>
      <Header />
      <ContentContainer>
        <ImageGrid
          images={images}
          fetchStatus={fetchStatus}
          onUploadImage={handleAddImage}
        />
      </ContentContainer>
      <HiddenFileInput ref={hiddenFileInputRef} onChange={handleUploadImage} />
    </Container>
  );
};
