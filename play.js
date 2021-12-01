const { connect } = require('./client');

const connectSuccess = () => console.log('Successfully connected to game server');

console.log("Connecting ...");
connect(connectSuccess);

module.exports = { connect };