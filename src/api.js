import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const getOrderBooks = (callBack) => {
    socket.emit('getOrderBooks', 'sample payload')
    socket.on('orderBookData', (data) => {
        console.log('recieved book data', data)
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
