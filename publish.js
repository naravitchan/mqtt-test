var mqtt = require('mqtt')

var client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    'username': 'mqtt',
    'password': 'password'
})

// qos 1
client.publish("qos1", "hello world!", { qos: 1 },
    function () {
        console.log("publish done!");
        client.end();
    }
);