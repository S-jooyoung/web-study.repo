/**
 * Let's make a game 🕹
 */

type positionState = {
  x: number;
  y: number;
};

type moveState = "up" | "down" | "left" | "right";

let position: positionState = {
  x: 0,
  y: 0,
};

function move(command: moveState) {
  switch (command) {
    case "up": {
      position.y++;
      break;
    }
    case "down": {
      position.y--;
      break;
    }
    case "left": {
      position.x--;
      break;
    }
    case "right": {
      position.x++;
      break;
    }
    default: {
      throw Error("unknown command");
    }
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
