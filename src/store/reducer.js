const stateInitial = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

const reducer = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case "RAND_FIRST":
      return {
        ...state,
        firstColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      };
    case "RAND_LAST":
      return {
        ...state,
        lastColor: randomHexColor(),
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};

export default reducer;
