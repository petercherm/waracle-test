import "@testing-library/jest-dom/extend-expect";
import { render } from "../../../utils/test-utils";
import { ViewImageModal, ViewImageModalProps } from "../ViewImageModal";

describe("GIVEN ViewImageModal component", () => {
  const onClose = jest.fn();

  const props: ViewImageModalProps = {
    imageUrl: "/test_url.jpg",
    onClose
  };
  test("it matches the snapshot", () => {
    const container = render(<ViewImageModal {...props} />);

    expect(container).toMatchSnapshot();
  });

  test("it renders all the elements correctly", () => {
    const { queryByTestId } = render(<ViewImageModal {...props} />);

    expect(queryByTestId("imageModal__overlay")).toBeTruthy();
    expect(queryByTestId("imageModal__button--close")).toBeTruthy();
    expect(queryByTestId("imageModal__image")).toBeTruthy();
  });

  test("it calls the onClose() function when the close button is clicked", () => {
    const { getByTestId } = render(<ViewImageModal {...props} />);

    const closeButton = getByTestId("imageModal__button--close");

    closeButton.click();

    expect(onClose).toBeCalled();
  });
});
