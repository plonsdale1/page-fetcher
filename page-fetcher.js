const request = require("request");
const fs = require("fs");


const url = process.argv[2];
const fileLocation = process.argv[3];

// error logs the error, response is the transaction response details, body is the data/ info
request(url, function (error, response, body) {
  if(!error) {
    // Save file ..
    fs.writeFile(fileLocation, body, function(err){
      if(err) {
        console.log("error at location!"); 
      }else {
        console.log("file saved gg");
      }
    }) 

    
  }
}) 






// const url = 

// i need to make it so the terminal can pass two arguments in one as a URL and the latter as a file path to send such URL





// const request = require('request');
// request('http://www.page-fetcher.com', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
