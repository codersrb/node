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
  password : 'root',
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
				 power_status: dataArr[2],
				 pone_voltage: dataArr[3],
	             ptwo_voltage: dataArr[4],
	             pthree_voltage: dataArr[5],
	             pone_amp: dataArr[6],
	             ptwo_amp: dataArr[7],
	             pthree_amp: dataArr[8],
	             frequency: dataArr[9],
	             dg_rpm: dataArr[10],
	             dg_run_hour: dataArr[11],
	             dg_minutes: dataArr[12],
	             kw: dataArr[13],
	             kva: dataArr[14],
	             pf: dataArr[15],
	             kwh: dataArr[16],
	             kwh_point: dataArr[17],
	             kvah: dataArr[18],
	             kvh_point: dataArr[19],
	             hct_status: dataArr[20],
	             llop_status: dataArr[21],
	             fuel_status: dataArr[22],
	             alternator: dataArr[23],
	             dg_fail_to_start: dataArr[24],
	             dg_fail_to_stop: dataArr[25],
	             dg_fault7: dataArr[26],
	             dg_fault8: dataArr[27],
	             ex_field1: dataArr[28],
	             ex_field2: dataArr[29],
	             ex_field3: dataArr[30],
	             ex_field4: dataArr[31],
	             ex_field5: dataArr[32],
	             ex_field6: dataArr[33],
	             batt_volt: dataArr[34],
	             up_ctr: dataArr[35],
	             dyn_ip: secondLastIndex,
				 stop_msg: lastIndex,

			 };


	         /** Insert the data to mysql , using async */
	         var query = db.query('INSERT INTO testfirsttbl2_new SET ?', insertData, function (error, results, fields) {
	                 if(error)
                     {
                         console.log(error);
                     }

                     if(results && results.affectedRows > 0)
                     {
                         /** Send data back to client (Acknowlegdement) */
                         /**
                          * @todo Send data back to meter
                          * @author Saurabh Sharma
                          * @lastModified Mon Feb 20 2017, 10:10:47 PM
                          */
                         sock.write(data);

                     }
	         });

		 }






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
