/**
 * @package NODE JS Socket Web Handler
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var net = require('net');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.all('/', function(req, res)
{

    if(req.method == 'POST')
    {
        var ip = req.body.ip;
        var port = req.body.port;
        var message = req.body.message;



        var client = new net.Socket();

        /**
         * @todo Create a socket connection to node server
         */
        client.connect(port, ip, function()
        {

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
        });

    }


    res.render('index');
});

app.listen(9000);
