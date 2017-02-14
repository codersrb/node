/** Require NODE Modules */
var net = require('net');

/**
 * @todo Config variables
 */
var HOST = '127.0.0.1';
var PORT = 8088;


var client = new net.Socket();

/**
 * @todo Create a socket connection to node server
 */
client.connect(PORT, HOST, function()
{
    /** Message String */
    var message = '$$$,111111111111110,1,240,250,230,100,50,70,50,1500,455,45,65,5000,1,0,1,0,1,1,1,230,240,230,50,50,50,51,45,34344,0,0,0,0,0***';
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);


    /**
     * @todo Send Message to Server
     */
    client.write(message);

});


/**
 * @todo When an Acknowlegdement is received from Server
 */
client.on('data', function(data) {

    console.log('Server SENT: ' + data);

    /**
     * @todo Close the Connection
     */
    client.destroy();

});


/**
 * @todo On closeing socket connection
 * @method EVENT Handler
 */
client.on('close', function() {
    console.log('Connection closed');
});
