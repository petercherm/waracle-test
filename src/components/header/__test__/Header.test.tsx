import "@testing-library/jest-dom/extend-expect";
import { render } from "../../../utils/test-utils";
import { Header } from "../Header";

describe("GIVEN the <Header /> component", () => {
  test("it matches the snapshot", () => {
    const container = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  test("it contains the correct text for heading and subheading", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header__heading--text")).toHaveTextContent(
      "WARACLE FRONT-END CHALLENGE"
    );
    expect(getByTestId("header__subheading--text")).toHaveTextContent(
      "Peter Chermanowicz"
    );
  });
});
