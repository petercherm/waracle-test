import {
  CloseButton,
  CloseButtonContainer,
  ImageContainer,
  LargeImage,
  ViewImageModalContainer,
  ViewImageModalOverlay
} from "./ViewImageModal.styles";

export interface ViewImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const ViewImageModal = ({ imageUrl, onClose }: ViewImageModalProps) => {
  return (
    <ViewImageModalOverlay>
      <ViewImageModalContainer>
        <CloseButtonContainer>
          <CloseButton onClick={onClose} />
        </CloseButtonContainer>
        <ImageContainer>
          <LargeImage src={imageUrl} />
        </ImageContainer>
      </ViewImageModalContainer>
    </ViewImageModalOverlay>
  );
};
