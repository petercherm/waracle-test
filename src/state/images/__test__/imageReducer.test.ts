import { requestImagesAction } from "../imageActions";
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

    expect(imagesReducer(initialState, requestImagesAction.request())).toEqual(
      expectedState
    );
  });

  test("it handles the @fetch/FETCH_IMAGES_SUCCESS correctly", () => {
    const mockResponse = {
      breed_ids: null,
      breeds: [],
      created_at: "2021-10-15T01:17:52.000Z",
      height: 3024,
      id: "geQomtavn",
      original_filename: "F228D6F8-2E6D-4E43-85EE-4275CD9E75A3.jpeg",
      sub_id: "demo-4e5577",
      url: "https://cdn2.thecatapi.com/images/geQomtavn.jpg",
      width: 4032
    };

    const expectedState: ImagesState = {
      ...initialState,
      items: [mockResponse]
    };

    expect(
      imagesReducer(initialState, requestImagesAction.success([mockResponse]))
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
      imagesReducer(
        initialState,
        requestImagesAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
