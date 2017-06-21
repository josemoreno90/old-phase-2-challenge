const clients = require('./clients.json');
const fs = require('fs');
  let name = process.argv[2];


    for(var key in clients) {
    if(clients[key].rep_name.indexOf(name) !== -1 )
      console.log(clients[key].id + ' - ' + clients[key].rep_name);
    };
    
