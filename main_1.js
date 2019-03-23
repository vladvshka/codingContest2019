
const pos = '100 50';
const input = 'F 1 T 3 F 5 T 1';

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
    console.log(x, y);
    console.log(actionList);

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
      if (axis === 1 && direction === 1) {
        x += value;
      } else if (axis === 1 && direction === -1) {
        x -= value;
      } else if (axis === -1 && direction === 1) {
        y += value;
      } else if (axis === -1 && direction === -1) {
        y -= value;
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

    console.log(x, y);

    return [x, y];
  };


  move(pos, input);
};

module.exports = init;
