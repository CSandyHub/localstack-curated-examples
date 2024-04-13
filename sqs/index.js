const sendMsg = require('./send')
const receiveMsg = require('./receive')

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

async function start() {
    sendMsg()
    await sleep(5000);
    receiveMsg()
}

start()