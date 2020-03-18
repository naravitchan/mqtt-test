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
client.on('connect', function () {
    client.subscribe('test', function (err) {
        if (!err) {
            client.publish('test', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log('subscrip get : ' + message.toString())
    // closeClient(client);
})
