const userNameReducer = (state: 'Anonymous', action) => {
  switch (action.type) {
    case 'SETNAME':
      return action.payload;
    default:
      return state;
  }
};

export default userNameReducer;
