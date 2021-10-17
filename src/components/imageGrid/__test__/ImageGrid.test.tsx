import "@testing-library/jest-dom/extend-expect";
import { ImageType } from "../../../models/theCatApi/image.models";
import { render } from "../../../utils/test-utils";
import { ImageGrid, ImageGridProps } from "../ImageGrid";

describe("GIVEN ImageGrid component", () => {
  const images: ImageType[] = [
    {
      breed_ids: null,
      breeds: [],
      created_at: "2021-10-15T01:17:52.000Z",
      height: 3024,
      id: "geQomtavn",
      original_filename: "F228D6F8-2E6D-4E43-85EE-4275CD9E75A3.jpeg",
      sub_id: "demo-4e5577",
      url: "https://cdn2.thecatapi.com/images/geQomtavn.jpg",
      width: 4032
    },
    {
      breed_ids: null,
      breeds: [],
      created_at: "2021-10-15T01:17:53.000Z",
      height: 3024,
      id: "abCDfe",
      original_filename: "F228D6F8-2E6D-4E43-85EE-4275CD9E75A4.jpeg",
      sub_id: "demo-4e5577",
      url: "https://cdn2.thecatapi.com/images/geQomtavn.jpg",
      width: 4032
    }
  ];

  const props: ImageGridProps = {
    images,
    fetchStatus: {
      isError: false,
      isFetching: false,
      error: ""
    },
    uploadStatus: {
      isError: false,
      isUploading: false,
      error: ""
    },
    onUploadImage: jest.fn(),
    onViewImage: jest.fn()
  };

  test("it matches the snapshot", () => {
    const container = render(<ImageGrid {...props} />);

    expect(container).toMatchSnapshot();
  });

  test("it renders all the elements correctly", () => {
    const { getAllByTestId, queryByTestId } = render(<ImageGrid {...props} />);

    expect(queryByTestId("imageGrid__error--uploadError")).toBeNull();
    expect(queryByTestId("imageGrid__loading")).toBeFalsy();
    expect(queryByTestId("imageGrid__error--fetchError")).toBeFalsy();
    expect(queryByTestId("addImage__container")).toBeTruthy();
    expect(getAllByTestId("imageTile__container").length).toEqual(2);
  });

  test("it renders the fetch error if the fetch status shows error", () => {
    const errorProps = {
      ...props,
      fetchStatus: {
        ...props.fetchStatus,
        isError: true,
        error: "Error"
      }
    };
    const { queryByTestId } = render(<ImageGrid {...errorProps} />);

    expect(queryByTestId("imageGrid__error--uploadError")).toBeNull();
    expect(queryByTestId("imageGrid__loading")).toBeFalsy();
    expect(queryByTestId("imageGrid__error--fetchError")).toBeTruthy();
    expect(queryByTestId("addImage__container")).toBeFalsy();
    expect(queryByTestId("imageTile__container")).toBeNull();
  });

  test("it renders the fetch error if the upload status shows error", () => {
    const errorProps = {
      ...props,
      uploadStatus: {
        ...props.uploadStatus,
        isError: true,
        error: "Error"
      }
    };
    const { queryByTestId, queryAllByTestId } = render(
      <ImageGrid {...errorProps} />
    );

    expect(queryByTestId("imageGrid__error--uploadError")).toBeTruthy();
    expect(queryByTestId("imageGrid__loading")).toBeFalsy();
    expect(queryByTestId("imageGrid__error--fetchError")).toBeFalsy();
    expect(queryByTestId("addImage__container")).toBeTruthy();
    expect(queryAllByTestId("imageTile__container").length).toEqual(2);
  });

  test("it renders the loading message if the fetching is in progress", () => {
    const loadingProps = {
      ...props,
      fetchStatus: {
        ...props.fetchStatus,
        isFetching: true
      }
    };
    const { queryByTestId } = render(<ImageGrid {...loadingProps} />);

    expect(queryByTestId("imageGrid__error--uploadError")).toBeFalsy();
    expect(queryByTestId("imageGrid__loading")).toBeTruthy();
    expect(queryByTestId("imageGrid__error--fetchError")).toBeFalsy();
    expect(queryByTestId("addImage__container")).toBeFalsy();
    expect(queryByTestId("imageTile__container")).toBeFalsy();
  });
});
