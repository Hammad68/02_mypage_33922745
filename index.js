// module to handle htttp requests and responses
var http = require("http");
// module for file I/O operations
var fs = require('fs');
// module to findout the path of current directory
var paths = require('path');

// port on which the wep app will be hosted
const port = 8000; 

// function to create a server with http module
http.createServer(function(req, res) { 
    
    // if url is pointing towards the about page
    if(req.url == '/about')
    {
        // storing the file path for html aboutMe file
        const filepath = paths.join(__dirname, "aboutMe.html");

        // reading the file and displaying the html content
        fs.readFile(filepath, (err, data) => {

            // if error happens then give an error code and explanatory text
            if(err){
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
             
             // if no errors were encountered then display html data 
            }else{
                res.writeHead(200, { "Content-Type" : "text/html"});
                res.end(data);
            }
        });

     // if the user hasn't navigated to the about page - landing page
    }else {
        res.writeHead(200, { "Content-Type" : "text/html"});
        res.end(`<h1>Welcome to the Node.js Web App.</h1>
            <p>For about me section, click here: <a href="https://www.doc.gold.ac.uk/ssh/ID/354/about">About Me</a></p>
        `);
    }
   
   // listening on the specified port for http server
}).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 