import {configureStore} from "@reduxjs/toolkit"
import confetiReducer from "./slice/confeti-slice"

export const store = configureStore({
    reducer: {
        confetti:confetiReducer,

    },
    // middleware:  (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat()
})
export type RootState =  ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch