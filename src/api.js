import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const getBittrex = (callBack) => {
    socket.emit('getBittrex', 'sample payload')
    socket.on('orderBookData', (data) => {
        console.log('recieved Bittrex data', data)
        return callBack(null, data)
    })
}

export const getPoloniex = (callBack) => {
    socket.emit('getPoloniex', 'sample payload')
    socket.on('poloniexData', (data) => {
        console.log('recieved poloniex data', data)
        return callBack(null, data)
    })
}
