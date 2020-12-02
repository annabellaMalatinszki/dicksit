export const setUserName = (name) => {
  return {
    type: 'SETNAME',
    payload: name,
  };
};

export const setUserColor = (color) => {
  return {
    type: 'SETCOLOR',
    payload: color,
  };
};

export const signIn = () => {
  return {
    type: 'SIGNED_IN',
  };
};

export const setNumOfPlayers = (numOfPlayers) => {
  return {
    type: 'SETNUMOFPLAYERS',
    payload: numOfPlayers,
  };
};
