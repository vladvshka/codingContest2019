const fs = require('fs');
const path = require('path');

const LEVEL = 3;

const getFilename = taskNumber => `level${LEVEL}_${taskNumber}.in`;
const getPathToAnswers = (taskNumber) => {
  const filename = getFilename(taskNumber);
  const PATH_TO_ANSWERS = path.join(__dirname, `../input/${LEVEL}/answers/${filename}`);
  return PATH_TO_ANSWERS;
};

const getPathToInput = (taskNumber) => {
  const filename = getFilename(taskNumber);
  const PATH_TO_INPUT = path.join(__dirname, `../input/${LEVEL}/input/${filename}`);
  return PATH_TO_INPUT;
};

const parseInput = (taskNumber) => {
  const lines = fs.readFileSync(getPathToInput(taskNumber), 'utf-8').split('\n');
  lines.pop();

  const [world, startPosition, movements, speed, numberOfAliens, ...rest] = lines;
  const alienSpawnTimes = rest.slice(0, numberOfAliens);
  const numberOfQueries = rest[numberOfAliens];
  const queries = rest.slice(Number(numberOfAliens) + 1);

  return {
    world,
    startPosition,
    movements,
    speed,
    numberOfAliens,
    alienSpawnTimes,
    numberOfQueries,
    queries,
  };
};

const outputResToFile = (taskNumber, string) => {
  const pathToAnswers = getPathToAnswers(taskNumber);
  fs.appendFileSync(pathToAnswers, `${string}\n`, (err) => {
    if (err) {
      return console.log(err);
    }
    return true;
  });
};


class Action {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}


class Alien {
  constructor(id, speed, spawnTime) {
    this.id = id;
    this.speed = speed;
    this.spawnTime = spawnTime;
    this.x = 0;
    this.y = 0;
    // direction can be 1 or -1 for increment or decrement (move along axis forward or backwards)
    this.direction = 1;
    // x axis 1; y axis -1;
    this.axis = 1;
  }

  setInitialPosition(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 1;
    this.axis = 1;
  }

  incrementX(value) {
    this.x = this.x + value;
  }

  incrementY(value) {
    this.y = this.y + value;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setAxis(axis) {
    this.axis = axis;
  }

  static getActionList(movement) {
    const actions = [];
    const movementList = movement.split(' ');
    for (let i = 0; i < movementList.length; i += 1) {
      const valInd = Math.floor(i / 2);
      if (!actions[valInd]) {
        actions[valInd] = [];
      }
      actions[valInd].push(movementList[i]);
    }

    return actions.map(action => new Action(action[0], Number(action[1])));
  }

  getPositionAtTick(startPosition, tick, movements) {
    // initial x y position of alien
    let [x, y] = startPosition.split(' ');
    x = Number(x);
    y = Number(y);

    this.setInitialPosition(x, y);

    const actionList = Alien.getActionList(movements);

    const numberOfSingleCellMoves = Math.floor((tick - this.spawnTime) * this.speed);

    let currentCellsMoved = 0;

    for (let k = 0; k < actionList.length; k++) {
      const action = actionList[k];
      const { type, value } = action;
      if (type === 'F') {
        // make single cells move until we reach numberOfCingleCellMoves
        for (let i = 0; i < value; i++) {
          if (currentCellsMoved < numberOfSingleCellMoves) {
            this.makeSingleCellMove();
            currentCellsMoved++;
          }
        }
      } else if (type === 'T') {
        this.makeTurn(value);
      }
    }

    return {
      x: this.x,
      y: this.y,
    };
  }

  makeTurn(value) {
    for (let i = 1; i <= value; i++) {
      if (this.axis === 1 && this.direction === 1) {
        this.axis = -1;
      } else if (this.axis === 1 && this.direction === -1) {
        this.axis = -1;
      } else if (this.axis === -1 && this.direction === 1) {
        this.axis = 1;
        this.direction = -1;
      } else if (this.axis === -1 && this.direction === -1) {
        this.axis = 1;
        this.direction = 1;
      }
    }
  }

  makeSingleCellMove() {
    if (this.axis === 1 && this.direction === 1) {
      this.incrementX(1);
    } else if (this.axis === 1 && this.direction === -1) {
      this.incrementX(-1);
    } else if (this.axis === -1 && this.direction === 1) {
      this.incrementY(1);
    } else if (this.axis === -1 && this.direction === -1) {
      this.incrementY(-1);
    }
  }
}

const processTask = (taskNumber) => {
  const input = parseInput(taskNumber);

  const aliens = input.alienSpawnTimes
    .map((spawnTime, index) => new Alien(index, Number(input.speed), Number(spawnTime)));

  input.queries.forEach((query) => {
    const [tick, alienId] = query.split(' ');
    const alien = aliens[alienId];

    const alienPosition = alien.getPositionAtTick(input.startPosition, tick, input.movements);

    outputResToFile(taskNumber, `${tick} ${alienId} ${alienPosition.x} ${alienPosition.y}`);
  });
};

const init = () => {
  for (let i = 1; i <= 5; i++) {
    processTask(i);
  }
};

module.exports = init;
