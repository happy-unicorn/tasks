// Есть массив из 0 и 1, отражающий расположения кораблей на поле для морского боя.
//Известно, что поле может быть любого размера, но обязательно квадратное.
//Так же известно, что кораблей может быть любое количество,
//но их расстановка соответствует правилам — корабли никак
//не соприкасаются друг с другом.
// Необходимо подсчитать количество кораблей.


const case1 = [
  1, 1, 0, 1,
  0, 0, 0, 0,
  1, 0, 1, 1,
  1, 0, 0, 0
];

const case2 = [
  1, 1, 1, 0, 1,
  0, 0, 0, 0, 1,
  0, 0, 1, 0, 1,
  1, 0, 0, 0, 1,
  1, 0, 1, 0, 1
];

const case3 = [
  1, 0, 1, 1,
  0, 0, 0, 0,
  1, 0, 1, 1,
  1, 0, 0, 0
];

const case4 = [
  1, 1, 0, 1, 0, 1,
  0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 0, 0,
  0, 0, 0, 0, 0, 1
];
const case5 = [
  1, 1, 0,
  0, 0, 0,
  1, 0, 1,
];

function countShips(board) {
  const sideSize = Math.sqrt(board.length);
  let shipCounter = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i] !== 0) {
      const x = i % sideSize;
      const y = Math.floor(i / sideSize);

      let cellCounter = 0;

      for (let k = x; k < sideSize; k++) {
        if (board[k + sideSize * y] === 0) {
          break;
        };
        board[k + sideSize * y] = 0;
        cellCounter++;
      }

      if (cellCounter === 1) {
        for (let m = y + 1; m < sideSize; m++) {
          if (board[m * sideSize + x] == 0) {
            break;
          };
          board[m * sideSize + x] = 0;
        }
      }

      shipCounter++;
    }
  }

  return shipCounter;
}

console.log('Число кораблей (случай 1): ', countShips(case1));
console.log('Число кораблей (случай 2): ', countShips(case2));
console.log('Число кораблей (случай 3): ', countShips(case3));
console.log('Число кораблей (случай 4): ', countShips(case4));
console.log('Число кораблей (случай 5): ', countShips(case5));

