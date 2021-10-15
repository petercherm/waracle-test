import { requestImages } from "../imageActions";
import {
  imagesInitialState,
  imagesReducer,
  ImagesState
} from "../imagesReducer";

const initialState = imagesInitialState;

describe("GIVEN imagesReducer", () => {
  test("it handles the @fetch/FETCH_IMAGES_REQUEST correctly", () => {
    const expectedState: ImagesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isFetching: true
      }
    };

    expect(imagesReducer(initialState, requestImages.request())).toEqual(
      expectedState
    );
  });

  test("it handles the @fetch/FETCH_IMAGES_SUCCESS correctly", () => {
    const expectedState: ImagesState = {
      ...initialState,
      items: [{ url: "test", size: 1234 }]
    };

    expect(
      imagesReducer(
        initialState,
        requestImages.success([{ url: "test", size: 1234 }])
      )
    ).toEqual(expectedState);
  });

  test("it handles the @fetch/FETCH_IMAGES_FAILURE correctly", () => {
    const expectedState: ImagesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isError: true,
        error: "Error"
      }
    };

    expect(
      imagesReducer(initialState, requestImages.failure({ error: "Error" }))
    ).toEqual(expectedState);
  });
});
