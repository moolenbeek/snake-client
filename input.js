let connection;
let setIntervalFunc;

const w = "Move: up";
const a = "Move: left";
const s = "Move: down";
const d = "Move: right";

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = key => {
  const interval = function(key) {
    setIntervalFunc = setInterval(() => {
      connection.write(key);
    }, 100);
  };
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('disconnecting ...')
    process.exit();
  }
  if (key === 'w') {
    clearInterval(setIntervalFunc);
    interval(w);
  }
  if (key === 'a') {
    clearInterval(setIntervalFunc);
    interval(a);
  }
  if (key === 's') {
    clearInterval(setIntervalFunc);
    interval(s);
  }
  if (key === 'd') {
    clearInterval(setIntervalFunc);
    interval(d);
  }
  if (key === "i") {
    connection.write('Say: snek goes brrrr');
  }
  if (key === "o") {
    connection.write('Say: ( ͡° ͜ʖ ͡°)');
  }
  if (key === 'p') {
    connection.write('Say: Lorem ipsum dolor sit amet.');
  }
};

module.exports = { setupInput };