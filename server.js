/**
 * @package NODE JS Socket Server Handler
 * @lastModified Sun Feb 12 2017 1:38:24 PM
 */


/** Require NODE Modules */
var net = require('net');
var mysql = require('mysql');




/**
 * @todo Config variables
 */
var HOST = '127.0.0.1';
var PORT = 8088;

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'vinove',
  database : 'temp'
});


/**
 * @todo Create a socket server and add a listener to a PORT
 */
net.createServer(function(sock)
{

    /**
     * @todo Client Information
     */
     var clientIP = sock.remoteAddress;
     var clientPort = sock.remotePort;

    /**
     * @todo When a client get connected
     */
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);



    /**
     * @todo Capture Stream data
     * @todo When a RAW Data is received over stream
     * @method EVENT Handler
     */
    sock.on('data', function(data)
    {


        /** Print data (message) sent by client */
        console.log('Client SENT ' + clientIP + ': ' + data);


		/**
		 * @todo Split the data for validation
		 */
		 var dataArr = data.toString().split(',');

		//  console.log( dataArr[(dataArr.length-1)] );

		/** Indexes */
		var firstIndex = dataArr[0];
		var lastIndex = dataArr[(dataArr.length-1)].substr(-3, 3);
		var secondLastIndex = dataArr[(dataArr.length-1)].replace('***', '');


		 /** Capture first index and match with $$$ */
		 if(firstIndex !== '$$$')
		 {
			 console.log(`$$$ not found`);
		 }
		 /** Capture last index and match with *** */
		 else if(lastIndex!== '***')
		 {
			 console.log(`*** not found`);
		 }
		 else
		 {
			 /** Howdy! Everything is fine till here, Go ahead */

			 /** Prepare Insert Data */
	         var insertData  = {
				 start_msg: dataArr[0],
				 imei_no: dataArr[1],
				 pm1: dataArr[2],
				 pm2: dataArr[3],
	             pm3: dataArr[4],
	             pm4: dataArr[5],
	             pm5: dataArr[6],
	             pm6: dataArr[7],
	             pm7: dataArr[8],
	             pm8: dataArr[9],
	             pm9: dataArr[10],
	             pm10: dataArr[11],
	             pm11: dataArr[12],
	             pm12: dataArr[13],
	             pm13: dataArr[14],
	             pm14: dataArr[15],
	             pm15: dataArr[16],
	             pm16: dataArr[17],
	             pm17: dataArr[18],
	             pm18: dataArr[19],
	             pm19: dataArr[20],
	             pm20: dataArr[21],
	             pm21: dataArr[22],
	             pm22: dataArr[23],
	             pm23: dataArr[24],
	             pm24: dataArr[25],
	             pm25: dataArr[26],
	             pm26: dataArr[27],
	             pm27: dataArr[28],
	             pm28: dataArr[29],
	             pm29: dataArr[30],
	             pm30: dataArr[31],
	             pm31: dataArr[32],
	             pm32: dataArr[33],
	             pm33: dataArr[34],
	             pm34: dataArr[35],
	             pm35: secondLastIndex,
				 stop_msg: lastIndex,

			 };


	         /** Insert the data to mysql , using async */
	         var query = db.query('INSERT INTO testfirsttbl_new SET ?', insertData, function (error, results, fields) {
	                 if (error) throw error;
	         });

		 }




        /** Send data back to client (Acknowlegdement) */
        sock.write('You said "' + data + '"');

    });

    /**
     * @todo Capture Close EVENT
     * @method EVENT Handler
     */
    sock.on('close', function(data) {
        // console.log('CLOSED: ' + clientIP +' '+ clientPort);
    });

}).listen(PORT, HOST);

// console.log('Server listening on ' + HOST +':'+ PORT);
