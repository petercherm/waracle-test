import {
  BottomStripe,
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
    <ViewImageModalOverlay data-testid="imageModal__overlay">
      <ViewImageModalContainer>
        <CloseButtonContainer>
          <CloseButton
            onClick={onClose}
            data-testid="imageModal__button--close"
          />
        </CloseButtonContainer>
        <ImageContainer>
          <LargeImage src={imageUrl} data-testid="imageModal__image" />
        </ImageContainer>
        <BottomStripe />
      </ViewImageModalContainer>
    </ViewImageModalOverlay>
  );
};
