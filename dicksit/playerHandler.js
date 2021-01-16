// Checks if name and color are already taken. If both free, returns true, else returns false.
const validatePlayer = (name, color, players) => {
  if (
    !players.some((i) => i.name === name) &&
    !players.some((i) => i.color === color)
  ) {
    return true;
  }

  return false;
};

exports.validatePlayer = validatePlayer;
