const clients = require('./clients.json');
const fs = require('fs');
  let name = process.argv[2];


    for(var key in clients) {
    var valueUp = clients[key].rep_name
    var nameUp = name.toUpperCase();

      if(valueUp.toUpperCase().indexOf(nameUp) !== -1  && valueUp.toUpperCase().startsWith(nameUp)) {
      console.log(clients[key].id + ' - ' + clients[key].rep_name);
      }
    };
