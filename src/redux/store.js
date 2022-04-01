import { createStore, action, persist } from "easy-peasy";

export default createStore(
  persist({
    user: { userid: null, username: "john" },
    selectedClub: null,
    setUser: action((state, payload) => {
      state.user = payload;
    }),
    setClub: action((state, payload) => {
      state.selectedClub = payload;
    }),
  })
);
