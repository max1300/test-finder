const fetch = require('node-fetch');
const url = 'https://api.github.com/users';


async function getUsers(){
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    
}


module.exports = {
    getUsers : getUsers
}