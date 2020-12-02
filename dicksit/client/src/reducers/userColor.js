const userColorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SETCOLOR':
      return action.payload;
    default:
      return 'blue';
  }
};

export default userColorReducer;
