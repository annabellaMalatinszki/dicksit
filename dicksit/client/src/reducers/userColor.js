const userColorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SETCOLOR':
      return action.payload;
    default:
      return state;
  }
};

export default userColorReducer;
