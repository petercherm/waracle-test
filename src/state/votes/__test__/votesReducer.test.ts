import { requestVotesAction } from "../voteActions";
import { votesInitialState, votesReducer, VotesState } from "../votesReducer";

const initialState = votesInitialState;

describe("GIVEN voteReducer", () => {
  test("it handles the @fetch/FETCH_VOTES_REQUEST correctly", () => {
    const expectedState: VotesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isFetching: true
      }
    };

    expect(votesReducer(initialState, requestVotesAction.request())).toEqual(
      expectedState
    );
  });

  test("it handles the @fetch/FETCH_VOTES_SUCCESS correctly", () => {
    const mockResponse = {
      id: 1120,
      imageId: "MTkyNTIwMA"
    };

    const expectedState: VotesState = {
      ...initialState,
      items: [mockResponse]
    };

    expect(
      votesReducer(
        {
          ...initialState,
          status: { ...initialState.status, isFetching: true }
        },
        requestVotesAction.success([mockResponse])
      )
    ).toEqual(expectedState);
  });

  test("it handles the @fetch/FETCH_VOTES_FAILURE correctly", () => {
    const expectedState: VotesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isError: true,
        error: "Error"
      }
    };

    expect(
      votesReducer(
        {
          ...initialState,
          status: { ...initialState.status, isFetching: true }
        },
        requestVotesAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
