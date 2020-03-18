var mqtt = require('mqtt')
var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    'username': 'mqtt',
    'password': 'password'
})

client.on('connect', function () {
    client.subscribe('test', function (err) {
        if (!err) {
            client.publish('test', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    // client.end()
})