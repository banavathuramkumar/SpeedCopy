import { createSlice } from "@reduxjs/toolkit";

const initialSessionState = {
  shape: "circle",
  roomBackground: "living-room",
  image: null,
  zoom: 1.0,
  xOffset: 0,
  yOffset: 0,
  rotation: 0,
  dialType: "numbers", // numbers, roman, ticks, none
  numberColor: "#000000",
  numberFont: "Inter",
  handColor: "#d4af37", // Gold
  handMovement: "sweep", // sweep, tick, static
  text: "",
  textFont: "Inter",
  textColor: "#000000",
  textSize: 20,
  textPosition: 70, // percent down (0-100)
  size: '12" x 12"',
};

const initialState = {
  customizerSession: { ...initialSessionState },
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    updateCustomizerSession: (state, action) => {
      state.customizerSession = { ...state.customizerSession, ...action.payload };
    },
    resetCustomizerSession: (state) => {
      state.customizerSession = { ...initialSessionState };
    },
  },
});

export const {
  updateCustomizerSession,
  resetCustomizerSession,
} = clockSlice.actions;

export default clockSlice.reducer;
