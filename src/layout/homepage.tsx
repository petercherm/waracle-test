import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/header/Header";
import { ImageGrid } from "../components/imageGrid/ImageGrid";
import { ViewImageModal } from "../components/ViewImageModal/ViewImageModal";
import { requestFavouritesAction } from "../state/favourites/favouriteActions";
import { requestImagesAction } from "../state/images/imageActions";
import {
  getImages,
  getImagesFetchStatus
} from "../state/images/imageSelectors";
import { uploadImageAction } from "../state/upload/uploadActions";
import { getImageUploadStatus } from "../state/upload/uploadSelectors";
import { requestVotesAction } from "../state/votes/voteActions";
import {
  Container,
  ContentContainer,
  HiddenFileInput
} from "./homepage.styles";

export const Homepage = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const fetchStatus = useSelector(getImagesFetchStatus);
  const uploadStatus = useSelector(getImageUploadStatus);
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const [viewImageUrl, setViewImageUrl] = useState("");

  useEffect(() => {
    /* NOTE: these fetches could be grouped into one action and handled
       the `initialiseApp` saga */
    dispatch(requestImagesAction.request());
    dispatch(requestFavouritesAction.request());
    dispatch(requestVotesAction.request());
  }, [dispatch]);

  const handleAddImage = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const handleUploadImage = (event: ChangeEvent) => {
    const formData = new FormData();
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    formData.append("file", files[0]);
    /* NOTE: This is an exception I made to keep things nice and consistent. 
       Actions should not contain any non-serialised data */
    dispatch(uploadImageAction.request(formData));
  };

  const handleViewImage = (imageUrl: string) => {
    setViewImageUrl(imageUrl);
  };

  const handleViewImageClose = () => {
    setViewImageUrl("");
  };

  return (
    <Container>
      <Header />
      <ContentContainer>
        <ImageGrid
          images={images}
          fetchStatus={fetchStatus}
          uploadStatus={uploadStatus}
          onUploadImage={handleAddImage}
          onViewImage={handleViewImage}
        />
      </ContentContainer>
      {viewImageUrl && (
        <ViewImageModal
          imageUrl={viewImageUrl}
          onClose={handleViewImageClose}
        />
      )}
      <HiddenFileInput ref={hiddenFileInputRef} onChange={handleUploadImage} />
    </Container>
  );
};
