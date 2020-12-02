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
