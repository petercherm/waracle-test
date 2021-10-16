import { AxiosError } from "axios";

export interface ErrorResponseMessage {
  message: string;
}

export const returnError = (
  error: AxiosError<ErrorResponseMessage, unknown>
) => {
  if (error.response) {
    return {
      error: { message: error.response.data?.message || "Unknown error" }
    };
  }
  return { error };
};
