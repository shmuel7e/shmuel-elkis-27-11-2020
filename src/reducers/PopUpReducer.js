const initialState = {
  isPopped: false,
  isAdded: false,
  isRemoved: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "FIRE_POPUP":
      return { ...state, isPopped: true };
    case "KILL_POPUP":
      return { ...state, isPopped: false };
    case "ADDED_POP":
      return { ...state, isAdded: true };
    case "KILL_ADDED_POP":
      return { ...state, isAdded: false };
    case "REMOVED_POP":
      return { ...state, isRemoved: true };
    case "KILL_REMOVED_POP":
      return { ...state, isRemoved: false };
    default:
      return state;
  }
}
