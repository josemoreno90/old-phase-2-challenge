const clients = require('./clients.json');
const fs = require('fs');
  let name = process.argv[2];


    for(var key in clients) {
    var toUp = clients[key].state
    if(toUp.toUpperCase() == name.toUpperCase())
      console.log(clients[key].id + ' - ' + clients[key].rep_name + '-' + clients[key].company +
     clients[key].city + '-' + clients[key].state);
    };
