const numOfPlayersReducer = (state = 4, action) => {
  switch (action.type) {
    case 'SETNUMOFPLAYERS':
      return action.payload;
    default:
      return state;
  }
};

export default numOfPlayersReducer;
