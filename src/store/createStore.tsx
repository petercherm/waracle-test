import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { getType } from "typesafe-actions";
import { uploadImageAction } from "../state/upload/uploadActions";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          getType(uploadImageAction.request),
          getType(uploadImageAction.failure)
        ]
      }
    }),
    sagaMiddleware
  ]
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
