import { createSlice, configureStore } from "@reduxjs/toolkit"
import { ProductItem } from "../global"
import { INITIAL_STATE } from "./state"

const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      debugger
      const item = state.find(item => item.id === action.payload.id)
      if (item) {
        item.added = true
      }
      return state
    },
    remove: (state, action) => {
      const item = state.find(item => item.id === action.payload.id)
      if (item) {
        item.added = false
      }
      return state
    }
  }
})

const store = configureStore({ reducer: basketSlice.reducer })

export const { add, remove } = basketSlice.actions

export { basketSlice, store }
