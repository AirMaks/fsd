import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { StateSchema } from "./StateSchema";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer
    };
    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();
type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
