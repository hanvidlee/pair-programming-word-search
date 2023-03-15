const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  for (let i = 0; i < letters[0].length; i++) {
    let verticalJoin = '';
    for (let j = 0; j < letters.length; j++) {
      verticalJoin += letters[j][i];
    }
    if (verticalJoin.includes(word)) {
      return true;
    }
  };
  return false;
};


module.exports = wordSearch;

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};