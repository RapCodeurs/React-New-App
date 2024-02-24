const initialState = { color: "rgb(29,29,29)" };

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLOR_CHANGED":
      // eslint-disable-next-line no-case-declarations
      let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      return { ...state, color: randomColor };
    default:
      return state;
  }
};

export const randomColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLOR_CHANGED":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
