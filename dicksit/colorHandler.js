const colors = [
  { color: 'blue', name: '', id: '1', isTaken: false },
  { color: 'red', name: '', id: '2', isTaken: false },
  { color: 'pink', name: '', id: '3', isTaken: false },
  { color: 'yellow', name: '', id: '4', isTaken: false },
  { color: 'orange', name: '', id: '5', isTaken: false },
  { color: 'green', name: '', id: '6', isTaken: false },
  { color: 'brown', name: '', id: '7', isTaken: false },
  { color: 'purple', name: '', id: '8', isTaken: false },
  { color: 'lime', name: '', id: '9', isTaken: false },
  { color: 'salmon', name: '', id: '10', isTaken: false },
  { color: 'aqua', name: '', id: '11', isTaken: false },
  { color: 'black', name: '', id: '12', isTaken: false },
];

exports.colors = colors;

const filterTakenColors = (players) => {
  colors.forEach((e) => {
    const isTaken = players.find(({ color }) => e.color === color);
    if (isTaken) {
      e.isTaken = true;
    }
  });
  return colors;
};

exports.filterTakenColors = filterTakenColors;
