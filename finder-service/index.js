const connection = require('./services/git-connection');

let findUsers = document.getElementById('button-test');
findUsers.addEventListener('click', connection.getUsers);


