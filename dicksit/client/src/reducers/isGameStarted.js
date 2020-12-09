const isGameStartedReducer = (state = false, action) => {
  switch (action.type) {
    case 'GAME_STARTED':
      return !state;
    default:
      return state;
  }
};

export default isGameStartedReducer;
