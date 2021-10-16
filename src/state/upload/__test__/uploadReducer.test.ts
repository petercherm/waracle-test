import { uploadImageAction } from "../uploadActions";
import {
  uploadInitialState,
  uploadReducer,
  UploadState
} from "../uploadReducer";

const initialState = uploadInitialState;

describe("GIVEN uploadReducer", () => {
  test("it handles the @upload/UPLOAD_IMAGE_REQUEST correctly", () => {
    const expectedState: UploadState = {
      ...initialState,
      status: {
        ...initialState.status,
        isUploading: true
      }
    };

    expect(
      uploadReducer(initialState, uploadImageAction.request({} as FormData))
    ).toEqual(expectedState);
  });

  test("it handles the @upload/UPLOAD_IMAGE_SUCCESS correctly", () => {
    const expectedState: UploadState = {
      ...initialState
    };

    expect(
      uploadReducer(
        {
          ...initialState,
          status: { ...initialState.status, isUploading: true }
        },
        uploadImageAction.success()
      )
    ).toEqual(expectedState);
  });

  test("it handles the @upload/UPLOAD_IMAGE_FAILURE correctly", () => {
    const expectedState: UploadState = {
      ...initialState,
      status: {
        ...initialState.status,
        isError: true,
        error: "Error"
      }
    };

    expect(
      uploadReducer(
        {
          ...initialState,
          status: { ...initialState.status, isUploading: true }
        },
        uploadImageAction.failure({ error: { message: "Error" } })
      )
    ).toEqual(expectedState);
  });
});
