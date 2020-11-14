const fetch = require('node-fetch');

module.exports = {
    name: 'deals',
    description: 'Prints all current deals',
    execute(message, args) {
        fetch('https://www.ozbargain.com.au/feed')
            .then(res => res.text())
            .then(body => console.log(body));
    }
}