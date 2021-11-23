import { useRef, useState } from "react";
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
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isPortrait, setIsPortrait] = useState(false);

  const onImageLoad = () => {
    if (imageContainerRef.current) {
      const image = imageContainerRef.current.childNodes[0] as HTMLImageElement;
      const dimensions = {
        width: image.getBoundingClientRect().width,
        height: image.getBoundingClientRect().height
      };
      setIsPortrait(dimensions.height > dimensions.width);
    }
  };

  return (
    <ViewImageModalOverlay data-testid="imageModal__overlay">
      <ViewImageModalContainer>
        <CloseButtonContainer>
          <CloseButton
            onClick={onClose}
            data-testid="imageModal__button--close"
          />
        </CloseButtonContainer>
        <ImageContainer ref={imageContainerRef}>
          <LargeImage
            isPortrait={isPortrait}
            src={imageUrl}
            data-testid="imageModal__image"
            onLoad={onImageLoad}
          />
        </ImageContainer>
      </ViewImageModalContainer>
    </ViewImageModalOverlay>
  );
};
