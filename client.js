var mqtt = require('mqtt')
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    'username': 'mqtt',
    'password': 'password'
})

var closeClient = (client) => {
    client.end({}, function () {
        console.log('end ')
    })
}

// mqtt pub -t 'test' -h 'localhost' -m 'from MQTT.js command'

// https://www.npmjs.com/package/mqtt#event-connect
client.on('connect', function () {
    client.subscribe('test', function (err) {
        if (!err) {
            client.publish('test', 'Subscribe test!')
        }
    })
    client.subscribe('test1', function (err) {
        if (!err) {
            client.publish('test1', 'Hello test1')
        }
    })
    client.subscribe('test2', function (err) {
        if (!err) {
            client.publish('test2', 'Hello test2')
        }
    })
})

// https://www.npmjs.com/package/mqtt#event-message
client.on('message', function (topic, message, packet) {
    switch (topic) {
        case 'test':
            return console.log('test get : ' + message.toString())
        case 'test1':
            return console.log('test1 get : ' + message.toString())
        case 'test2':
            return console.log('test2 get : ' + message.toString())
    }
    // closeClient(client);
})
