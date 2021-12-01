const net = require("net");

const connect = function (callback) {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });


  conn.on('connect', () => {
    callback();
    conn.write("Name: EGM");
  });

  

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;