var redis = require('redis');
 // this creates a new client
var client = redis.createClient(6379, host);
client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});