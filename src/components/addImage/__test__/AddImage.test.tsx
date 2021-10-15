import "@testing-library/jest-dom/extend-expect";
import { render } from "../../../utils/test-utils";
import { AddImage } from "../AddImage";

describe("GIVEN the <AddImage /> component", () => {
  test("it matches the snapshot", () => {
    const container = render(<AddImage />);

    expect(container).toMatchSnapshot();
  });
});
