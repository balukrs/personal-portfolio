export const hoverReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOC":
      return { ...state, hoverloc: action.payload };
    default:
      return state;
  }
};
