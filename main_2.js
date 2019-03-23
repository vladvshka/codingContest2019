const fs = require('fs');
const path = require('path');

const outputResToFile = (string) => {
  fs.appendFileSync(path.join(__dirname, '../input/2/answers/level2_1.in'), `${string}\n`, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

const gridSize = '500 500';
const pos = '0 353';
const input = 'F 1 T 3 F 14 T 1 F 22 T 3 F 23 T 1 F 7 T 3 F 8 T 1 F 10 T 3 F 1 T 1 F 4 T 3 F 9 T 3 F 5 T 1 F 9 T 3 F 1 T 1 F 10 T 1 F 8 T 3 F 5 T 3 F 14 T 1 F 9 T 1 F 2 T 3 F 28 T 1 F 21 T 3 F 16 T 3 F 1 T 1 F 16 T 1 F 13 T 3 F 25 T 1 F 7 T 3 F 10 T 3 F 13 T 1 F 22 T 3 F 4 T 1 F 10 T 1 F 19 T 3 F 17 T 1 F 4 T 3 F 11 T 3 F 1 T 1 F 10 T 1 F 9 T 3 F 5 T 1 F 18 T 3 F 6 T 3 F 1 T 1 F 18 T 1 F 8 T 3 F 19 T 1 F 14 T 3 F 13 T 1 F 4 T 3 F 6 T 3 F 9 T 1 F 16 T 3 F 5 T 1 F 2 T 3 F 26 T 1 F 11 T 3 F 20 T 1 F 3 T 3 F 13 T 1 F 1 T 1 F 374 T 1 F 8 T 3 F 11 T 1 F 1 T 3 F 15 T 1 F 1 T 3 F 14 T 1 F 33 T 1 F 3 T 3 F 13 T 1 F 5 T 3 F 4 T 3 F 18 T 1 F 7 T 3 F 2 T 1 F 10 T 1 F 32 T 3 F 10 T 3 F 5 T 1 F 11 T 3 F 40 T 1 F 31 T 1 F 10 T 3 F 28 T 3 F 8 T 1 F 8 T 1 F 40 T 3 F 23 T 1 F 2 T 3 F 16 T 1 F 16 T 3 F 12 T 3 F 37 T 1 F 8 T 3 F 2 T 1 F 28 T 3 F 2 T 1 F 8 T 3 F 5 T 1 F 2 T 3 F 13 T 1 F 16 T 1 F 10 T 3 F 2 T 3 F 4 T 1 F 12 T 3 F 3 T 1 F 12 T 1 F 13 T 3 F 5 T 1 F 3 T 3 F 14 T 1 F 23 T 3 F 12 T 1 F 8 T 3 F 3 T 1 F 2 T 3 F 4 T 1 F 6 T 3 F 11 T 1 F 23 T 3 F 15 T 3 F 4 T 1 F 9 T 1 F 11 T 3 F 6 T 1 F 1 T 3 F 22 T 1 F 21 T 3 F 5 T 1 F 2 T 3 F 4 T 1 F 1 T 3 F 3 T 3 F 8 T 1 F 1 T 3 F 4 T 1 F 9 T 3 F 6 T 1 F 2 T 3 F 20 T 1 F 6 T 3 F 15 T 1 F 10 T 3 F 15 T 1 F 10 T 3 F 16 T 1 F 10 T 3 F 18 T 1 F 10 T 3 F 3 T 1 F 13 T 3 F 6 T 1 F 10 T 1 F 19 T 3 F 1 T 1 F 328 T 1 F 4 T 1 F 12 T 3 F 6 T 1 F 2 T 3 F 26 T 1 F 3 T 3 F 23 T 1 F 13 T 3 F 10 T 3 F 8 T 1 F 6 T 1 F 7 T 3 F 11 T 3 F 4 T 1 F 17 T 1 F 15 T 3 F 8 T 1 F 17 T 3 F 1 T 1 F 12 T 3 F 14 T 3 F 11 T 1 F 9 T 1 F 2 T 3 F 12 T 3 F 10 T 1 F 4 T 3 F 8 T 1 F 18 T 1 F 21 T 3 F 5 T 1 F 5 T 3 F 26 T 3 F 3 T 1 F 8 T 1 F 22 T 3 F 20 T 1 F 2 T 3 F 15 T 1 F 12 T 3 F 15 T 3 F 3 T 1 F 18 T 1 F 12 T 3 F 14 T 1 F 10 T 3 F 2 T 3 F 1 T 1 F 18 T 3 F 4 T 1 F 28 T 3 F 6 T 1 F 1 T 1 F 12 T 3 F 7 T 1 F 25 T 3 F 25 T 3 F 2 T 1 F 2 T 1 F 13 T 3 F 8 T 1 F 12 T 3 F 16 T 1 F 15 T 3 F 3 T 1 F 21 T 3 F 7 T 1 F 8 T 3 F 10 T 3 F 5 T 1 F 4 T 3 F 20 T 1 F 4 T 3 F 11 T 1 F 15 T 1 F 19 T 3 F 18 T 1 F 8 T 3 F 14 T 3 F 4 T 1 F 7 T 3 F 14 T 1 F 18 T 3 F 37 T 3 F 19 T 3 F 27 T 1 F 5 T 1 F 2 T 3 F 3 T 3 F 1 T 1 F 13 T 1 F 13 T 3 F 2 T 1 F 8 T 3 F 19 T 1 F 6 T 3 F 22 T 1 F 1 T 3 F 6 T 1 F 6 T 3 F 23 T 1 F 29 T 3 F 16 T 3 F 1 T 1 F 16 T 1 F 27 T 3 F 4 T 3 F 2 T 1 F 5 T 1 F 10 T 3 F 7 T 1 F 3 T 3 F 15 T 1 F 16 T 3 F 14 T 1 F 4 T 3 F 3 T 3 F 7 T 1 F 1 T 3 F 15 T 1 F 17 T 1 F 33 T 3 F 8 T 3 F 2 T 1 F 8 T 3 F 3 T 1 F 10 T 1 F 10 T 3 F 7 T 1 F 3 T 3 F 9 T 1 F 13 T 3 F 7 T 3 F 18 T 1 F 7 T 3 F 13 T 1 F 19 T 1 F 43 T 3 F 1 T 1 F 12 T 3 F 17 T 3 F 8 T 1 F 12 T 1 F 20 T 3 F 12 T 3 F 1 T 1 F 11 T 1 F 2 T 3 F 7 T 1 F 10 T 3 F 23 T 3 F 17 T 1 F 22 T 3 F 2 T 1 F 12 T 3 F 7 T 1 F 15 T 1 F 11 T 3 F 1 T 3 F 27 T 1 F 21 T 3 F 25 T 1 F 10 T 3 F 2 T 1 F 18 T 3 F 3 T 1 F 7 T 1 F 10 T 3 F 20 T 1 F 10 T 3 F 1 T 3 F 254 T 3 F 13 T 3 F 13 T 1 F 26 T 1 F 6 T 3 F 5 T 1 F 9 T 3 F 5 T 3 F 18 T 1 F 4 T 3 F 25 T 1 F 1 T 3 F 1 T 1 F 5 T 3 F 38 T 1 F 10 T 3 F 8 T 1 F 29 T 1 F 5 T 3 F 34 T 3 F 9 T 1 F 20 T 3 F 17 T 1 F 11 T 1 F 25 T 3 F 2 T 1 F 8 T 3 F 11 T 3 F 9 T 1 F 9 T 1 F 13 T 3 F 22 T 1 F 22 T 3 F 6 T 1 F 18 T 3 F 17 T 1 F 12 T 3 F 20 T 3 F 44 T 1 F 1 T 3 F 1 T 1 F 19 T 1 F 14 T 3 F 5 T 1 F 2 T 3 F 9 T 3 F 18 T 1 F 11 T 1 F 8 T 3 F 4 T 1 F 11 T 3 F 6 T 3 F 18 T 1 F 24 T 1 F 22 T 3 F 17 T 1 F 21 T 3 F 11 T 3 F 2 T 1 F 4 T 3 F 15 T 1 F 1 T 3 F 13 T 1 F 12 T 3 F 3 T 1 F 3 T 1 F 2 T 3 F 17 T 1 F 7 T 3 F 6 T 3 F 14 T 1 F 9 T 1 F 4 T 3 F 37 T 3 F 5 T 1 F 45 T 1 F 26 T 3 F 1 T 1 F 105 T 3 F 2 T 3 F 327 T 3 F 11 T 1 F 15 T 3 F 10 T 1 F 3 T 3 F 25 T 1 F 2 T 3 F 20 T 1 F 6 T 3 F 14 T 3 F 12 T 1 F 11 T 3 F 10 T 1 F 33 T 1 F 5 T 3 F 17 T 1 F 2 T 3 F 19 T 1 F 12 T 3 F 9 T 3 F 4 T 1 F 25 T 3 F 3 T 1 F 3 T 3 F 18 T 1 F 11 T 3 F 5 T 1 F 25 T 3 F 4 T 1 F 4 T 1 F 8 T 3 F 9 T 1 F 11 T 3 F 27 T 1 F 22 T 3 F 34 T 1 F 16 T 3 F 21 T 1 F 9 T 3 F 12 T 3 F 2 T 1 F 11 T 1 F 29 T 3 F 12 T 1 F 3 T 3 F 12 T 3 F 10 T 1 F 1 T 3 F 15 T 1 F 24 T 1 F 4 T 3 F 31 T 1 F 17 T 3 F 32 T 1 F 26 T 3 F 15 T 1 F 14 T 3 F 5 T 1 F 13 T 3 F 8 T 1 F 1 T 1 F 9 T 3 F 11 T 1 F 15 T 3 F 12 T 1 F 2 T 1 F 3 T 3 F 4 T 1 F 8 T 3 F 10 T 3 F 9 T 1 F 18 T 1 F 4 T 3 F 27 T 1 F 16 T 3 F 11 T 1 F 25 T 3 F 8 T 1 F 3 T 3 F 4 T 1 F 2 T 3 F 6 T 1 F 10 T 3 F 30 T 3 F 19 T 1 F 4 T 3 F 9 T 1 F 28 T 1 F 1 T 3 F 23 T 1 F 4 T 3 F 2 T 1 F 30 T 3 F 20 T 1 F 2 T 3 F 4 T 1 F 10 T 3 F 18 T 3 F 21 T 1 F 16 T 1 F 26 T 3 F 5 T 1 F 3 T 3 F 12 T 1 F 8 T 3 F 1 T 3 F 1 T 1 F 14 T 1 F 11 T 3 F 25 T 3 F 22 T 1 F 37 T 1 F 10 T 3 F 2 T 3 F 7 T 1 F 27 T 1 F 3 T 3 F 3 T 1 F 11 T 3 F 8 T 1 F 11 T 3 F 21 T 1 F 4 T 3 F 7 T 3 F 43 T 1 F 5 T 3 F 15 T 1 F 4 T 3 F 27 T 1 F 6 T 3 F 2 T 1 F 12 T 3 F 16 T 1 F 15 T 3 F 9 T 1 F 20 T 3 F 11 T 1 F 4 T 1 F 441 T 1 F 9 T 1 F 20 T 3 F 49 T 1 F 4 T 3 F 11 T 3 F 1 T 1 F 20 T 1 F 13 T 3 F 11 T 1 F 2 T 3 F 10 T 3 F 1 T 1 F 26 T 3 F 3 T 1 F 21 T 3 F 9 T 1 F 3 T 1 F 3 T 3 F 15 T 3 F 6 T 1 F 71 T 3 F 39 T 1 F 2 T 3 F 3 T 1 F 8 T 1 F 5 T 3 F 18 T 1 F 14 T 3 F 15 T 1 F 7 T 3 F 7 T 1 F 1 T 3 F 11 T 1 F 2 T 3 F 1 T 1 F 5 T 3 F 29 T 1 F 42 T 3 F 12 T 1 F 15 T 3 F 7 T 3 F 19 T 1 F 4 T 3 F 4 T 1 F 33 T 1 F 29 T 3 F 47 T 1 F 5 T 3 F 13 T 1 F 18 T 3 F 2 T 1 F 10 T 3 F 20 T 1 F 9 T 3 F 9 T 3 F 29 T 1 F 1 T 3 F 89 T 1 F 1 T 1 F 281 T 1 F 26 T 3 F 29 T 1 F 8 T 3 F 1 T 1 F 57 T 3 F 33 T 1 F 1 T 3 F 11 T 1 F 6 T 3 F 22 T 1 F 2 T 3 F 2 T 1 F 2 T 3 F 2 T 1 F 33 T 3 F 37 T 1 F 36 T 1 F 48 T 3 F 9 T 1 F 6 T 3 F 16 T 3 F 24 T 1 F 20 T 1 F 38 T 3 F 20 T 1 F 24 T 3 F 14 T 3 F 7 T 1 F 12 T 3 F 2 T 1 F 23 T 3 F 34 T 1 F 23 T 1 F 7 T 3 F 11 T 3 F 32 T 1 F 1 T 3 F 32 T 1 F 21 T 1 F 7 T 3 F 39 T 1 F 23 T 3 F 8 T 3 F 10 T 1 F 1 T 3 F 8 T 1 F 23 T 3 F 2 T 1 F 6 T 3 F 9 T 1 F 5 T 1 F 4 T 3 F 30 T 1 F 55 T 3 F 21 T 1 F 19 T 3 F 7 T 1 F 43 T 1 F 35 T 3 F 41 T 1 F 3 T 3 F 24 T 1 F 7 T 3 F 15 T 1 F 22 T 3 F 7 T 1 F 14 T 1 F 1 T 3 F 15 T 3 F 2 T 1 F 7 T 1 F 5 T 3 F 9 T 1 F 12 T 3 F 23 T 3 F 14 T 1 F 19 T 1 F 28 T 3 F 3 T 1 F 2 T 3 F 6 T 1 F 17 T 3 F 9 T 1 F 2 T 3 F 26 T 3 F 1 T 1 F 38 T 1 F 30 T 3 F 11 T 3 F 53 T 1 F 69 T 3 F 18 T 1 F 5 T 1 F 4 T 3 F 16 T 3 F 3 T 1 F 6 T 3 F 7 T 1 F 6 T 3 F 12 T 1 F 15 T 3 F 13 T 1 F 13 T 1 F 14 T 3 F 5 T 3 F 4 T 1 F 28 T 3 F 5 T 1 F 20 T 3 F 18 T 1 F 31 T 1 F 2 T 3 F 6 T 3 F 7 T 1 F 4 T 1 F 9 T 3 F 7 T 1 F 142 T 1 F 3 T 3 F 50 T 1 F 48 T 3 F 20 T 1 F 13 T 1 F 13 T 3 F 41 T 3 F 52 T 1 F 26 T 3 F 7 T 1 F 77 T 1 F 11 T 3 F 7 T 3 F 2 T 1 F 49 T 3 F 3 T 1 F 7 T 3 F 7 T 1 F 23 T 1 F 2 T 3 F 10 T 1 F 16 T 3 F 32 T 3 F 12 T 1 F 68 T 1 F 3 T 3 F 14 T 3 F 6 T 1 F 40 T 1 F 194 T 3 F 10 T 1 F 19 T 3 F 9 T 1 F 23 T 1 F 10 T 3 F 2 T 1 F 7 T 1 F 6 T 3 F 4 T 3 F 7 T 1 F 4 T 1 F 4 T 3 F 7 T 3 F 14 T 1 F 8 T 1 F 5 T 3 F 2 T 3 F 6 T 1 F 11 T 1 F 9 T 3 F 18 T 3 F 40 T 1 F 35 T 3 F 56 T 1 F 15 T 1 F 12 T 3 F 11 T 3 F 39 T 1 F 42 T 1 F 44 T 3 F 28 T 3 F 2 T 1 F 14 T 1 F 1 T 3 F 35 T 3 F 6 T 1 F 2 T 1 F 4 T 3 F 6 T 1 F 11 T 3 F 14 T 1 F 15 T 3 F 14 T 3 F 11 T 1 F 11 T 1 F 8 T 3 F 8 T 1 F 21 T 3 F 5 T 1 F 8 T 3 F 2 T 3 F 1 T 1 F 1 T 1 F 19 T 3 F 33 T 3 F 17 T 1 F 15 T 3 F 7 T 1 F 41 T 3 F 16 T 1 F 9 T 1 F 9 T 3 F 8 T 3 F 21 T 1 F 4 T 3 F 1 T 1 F 12 T 3 F 8 T 1 F 7 T 1 F 1 T 3 F 24 T 1 F 28 T 1 F 8 T 3 F 37 T 1 F 1 T 3 F 42 T 1 F 74 T 1 F 2 T 3 F 28 T 3 F 19 T 1 F 18 T 3 F 26 T 1 F 14 T 3 F 75 T 1 F 17 T 1 F 2 T 3 F 86 T 1 F 37 T 3 F 97 T 3 F 3 T 1 F 6 T 1 F 10 T 3 F 6 T 3 F 11 T 1 F 3 T 3 F 4 T 1 F 97 T 1 F 108 T 3 F 7 T 1 F 18 T 1 F 10 T 3 F 1 T 1 F 9 T 3 F 23 T 1 F 24 T 1 F 5 T 3 F 1 T 3 F 4 T 1 F 49 T 3 F 77 T 1 F 22 T 3 F 9 T 1 F 9 T 3 F 15 T 1 F 16 T 3 F 59 T 1 F 1 T 3 F 12 T 1 F 99 T 3 F 47 T 1 F 12 T 1 F 52 T 3 F 15 T 1 F 22 T 3 F 9 T 3 F 9 T 1 F 12 T 3 F 3 T 1 F 30 T 3 F 61 T 1 F 36 T 1 F 25 T 3 F 2 T 1 F 4 T 3 F 8 T 1 F 3 T 3 F 2 T 3 F 11 T 1 F 22 T 3 F 3 T 1 F 2 T 3 F 6 T 1 F 24 T 1 F 29 T 3 F 18 T 1 F 45 T 3 F 2 T 1 F 7 T 3 F 5 T 3 F 1 T 1 F 21 T 1 F 38 T 1 F 1 T 3 F 7 T 1 F 31 T 3 F 14 T 1 F 15 T 3 F 6 T 1 F 20 T 3 F 19 T 1 F 49 T 3 F 9 T 1 F 5 T 3 F 7 T 1 F 56 T 3 F 18 T 1 F 51 T 1 F 2 T 3 F 8 T 1 F 2 T 3 F 3 T 3 F 5 T 1 F 7 T 3 F 2 T 1 F 7 T 1 F 30 T 3 F 26 T 3 F 11 T 1 F 20 T 1 F 3 T 3 F 3 T 3 F 8 T 1 F 5 T 1 F 15 T 3 F 55 T 1 F 95 T 3 F 10 T 1 F 1 T 3 F 16 T 3 F 13 T 1 F 36 T 1 F 91 T 3 F 6 T 1 F 8 T 3 F 12 T 3 F 186 T 1 F 1 T 3 F 24 T 3 F 146 T 3 F 33 T 1 F 2 T 3 F 2 T 1 F 31 T 3 F 25 T 1 F 69 T 1 F 3 T 3 F 19 T 3 F 58 T 1 F 39 T 1 F 38 T 3 F 71 T 3 F 61 T 1 F 11 T 1 F 130 T 3 F 51 T 1 F 68 T 1 F 53 T 1 F 52 T 3 F 177 T 3 F 7 T 1 F 11 T 1 F 8 T 3 F 101 T 3 F 128 T 3 F 58 T 1 F 102 T 3 F 11 T 1 F 25 T 3 F 260 T 1 F 11 T 1 F 54 T 1 F 450 T 3 F 26 T 1 F 15 T 3 F 10 T 3 F 11 T 1 F 215 T 3 F 25 T 1 F 7 T 1 F 26 T 1 F 266 T 3 F 38';

const getActionList = (movement) => {
  const actions = [];
  const movementList = movement.split(' ');
  for (let i = 0; i < movementList.length; i += 1) {
    const valInd = Math.floor(i / 2);
    if (!actions[valInd]) {
      actions[valInd] = [];
    }
    actions[valInd].push(movementList[i]);
  }

  return actions.map(action => ({
    type: action[0],
    value: Number(action[1]),
  }));
};

const init = () => {
  const move = (initPos, movement) => {
    // initial x y position of trooper
    let [x, y] = initPos.split(' ');
    x = Number(x);
    y = Number(y);

    // action can be 1 or -1 for increment or decrement (move along axis forward or backwards)
    let direction = 1;
    // x axis 1; y axis -1;
    let axis = 1;


    const actionList = getActionList(movement);
    console.log(actionList);


    // console initial position
    console.log(x, y);
    outputResToFile(`${x} ${y}`);

    const makeTurn = (value) => {
      for (let i = 1; i <= value; i++) {
        if (axis === 1 && direction === 1) {
          axis = -1;
        } else if (axis === 1 && direction === -1) {
          axis = -1;
        } else if (axis === -1 && direction === 1) {
          axis = 1;
          direction = -1;
        } else if (axis === -1 && direction === -1) {
          axis = 1;
          direction = 1;
        }
      }
    };

    const makeMove = (value) => {
      for (let i = 1; i <= value; i++) {
        if (axis === 1 && direction === 1) {
          x += 1;
        } else if (axis === 1 && direction === -1) {
          x -= 1;
        } else if (axis === -1 && direction === 1) {
          y += 1;
        } else if (axis === -1 && direction === -1) {
          y -= 1;
        }
        console.log(x, y);

        outputResToFile(`${x} ${y}`);
      }
    };

    const makeAction = (action) => {
      const { type, value } = action;
      if (type === 'F') {
        makeMove(value);
      } else if (type === 'T') {
        makeTurn(value);
      }
    };

    actionList.forEach(makeAction);
  };


  move(pos, input);
};

module.exports = init;
