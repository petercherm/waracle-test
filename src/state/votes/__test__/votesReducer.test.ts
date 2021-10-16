import { requestVotesAction, setVoteAction } from "../voteActions";
import {
  Score,
  votesInitialState,
  votesReducer,
  VotesState
} from "../votesReducer";

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
    const mockResponse: Score = {
      abcd: {
        score: 2
      }
    };
    const expectedState: VotesState = {
      ...initialState,
      items: mockResponse
    };

    expect(
      votesReducer(
        {
          ...initialState,
          status: { ...initialState.status, isFetching: true }
        },
        requestVotesAction.success(mockResponse)
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

  test("it handles the @set/SET_VOTE_REQUEST correctly", () => {
    const expectedState: VotesState = {
      ...initialState,
      status: {
        ...initialState.status,
        isUpdating: true,
        updatingImageId: "abcd"
      }
    };

    expect(
      votesReducer(
        initialState,
        setVoteAction.request({ imageId: "abcd", value: 1 })
      )
    ).toEqual(expectedState);
  });

  test("it handles the @set/SET_VOTE_SUCCESS correctly", () => {
    const expectedState: VotesState = {
      ...initialState,
      status: initialState.status
    };

    expect(
      votesReducer(
        {
          ...initialState,
          status: {
            ...initialState.status,
            isUpdating: true,
            updatingImageId: "abcd"
          }
        },
        setVoteAction.success()
      )
    ).toEqual(expectedState);
  });

  test("it handles the @set/SET_VOTE_FAILURE correctly", () => {
    const expectedState: VotesState = {
      ...initialState,
      status: initialState.status
    };

    expect(
      votesReducer(
        {
          ...initialState,
          status: initialState.status
        },
        setVoteAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
