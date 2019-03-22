
const express = require('express');//load the express library into the file

const server = express();//now we have a server

server.use( express.static( __dirname + '/html' ) ); 

var insults = [
    'your breath smells like skunks',
    'Your mama is so bald...',
    'Your mama is so old, when she farts, she farts dust',    
]
server.get('/insults', ( request, response )=>{
    for(i=0; i > insults.length; i++)
        response.send(insults);
    })
    //the path to listern for
    //the callback function to call once that path has been received
server.get('/', function( request, response ){
// object representing all the data coming to the client to the server
//objext that is representing  all of the data going from the server to the client
    response.send('Hello, World.')
})

server.get('/time', (request, response)=>{
    var now = new Date();
    response.send( now.toLocaleDateString() )
});


server.listen(3001, ()=>{//a callback function
    //console.log('server is running on port 3001');
    console.log('carrier has arrived');
})
