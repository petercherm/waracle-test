import { requestFavouritesAction } from "../favouriteActions";
import {
  favouritesInitialState,
  favouritesReducer,
  FavouritesState
} from "../favouritesReducer";

const initialState = favouritesInitialState;

describe("GIVEN favouritesReducer", () => {
  test("it handles the @fetch/FETCH_FAVOURITES_REQUEST correctly", () => {
    const expectedState: FavouritesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isFetching: true
      }
    };

    expect(
      favouritesReducer(initialState, requestFavouritesAction.request())
    ).toEqual(expectedState);
  });

  test("it handles the @fetch/FETCH_FAVOURITES_SUCCESS correctly", () => {
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

    const expectedState: FavouritesState = {
      ...initialState,
      items: [mockResponse]
    };

    expect(
      favouritesReducer(
        initialState,
        requestFavouritesAction.success([mockResponse])
      )
    ).toEqual(expectedState);
  });

  test("it handles the @fetch/FETCH_FAVOURITES_FAILURE correctly", () => {
    const expectedState: FavouritesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isError: true,
        error: "Error"
      }
    };

    expect(
      favouritesReducer(
        initialState,
        requestFavouritesAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
