var mosca = require('mosca');
var setting = {
    port: 1883,
    http: {
        port: 8883
    }
};
var server = new mosca.Server(setting);
server.on('ready', setup)

function setup() {
    server.authenticate = authenticate;
    console.log('Mosca server is up');
}

var authenticate = function (client, username, password, callback) {
    var authorized = (username == 'mqtt' && password.toString() == 'password');
    if (authorized) client.user = username;
    callback(null, authorized);
}

server.on('clientConnected', function (client) {
    console.log('Client Connected', client.id)
})

server.on('clientDisconnected', function (client) {
    console.log('Client Disconnected', client.id)
})

server.on('published', function (packet, client) {
    console.log(packet)
    console.log('Published', packet.payload.toString());
})
