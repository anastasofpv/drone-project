'use strict';

const { callbackify } = require('util');
const server = require("../server");

const log = console.log;

exports.postMap = async function (data,callback) {
    // log(data);
    mapResult = data;
    insertDB(mapResult);
    server.SocketEmit(mapResult);
    callback(null,1)
}

exports.getMap = function (callback) {
    // log(thermalResult);
    callback(null,mapResult)
}