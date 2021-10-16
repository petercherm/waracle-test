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
      id: 1120,
      imageId: "MTkyNTIwMA"
    };

    const expectedState: FavouritesState = {
      ...initialState,
      items: [mockResponse]
    };

    expect(
      favouritesReducer(
        {
          ...initialState,
          status: { ...initialState.status, isFetching: true }
        },
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
        {
          ...initialState,
          status: { ...initialState.status, isFetching: true }
        },
        requestFavouritesAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
