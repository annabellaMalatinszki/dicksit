// Returns a 4 characters long uppercase string of random letters and numbers
const generateCode = () => {
  const code = Math.random().toString(36).slice(2, 6).toUpperCase();

  return code;
};

exports.generateCode = generateCode;
