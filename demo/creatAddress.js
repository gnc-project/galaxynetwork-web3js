var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

var newAccount=web3.eth.accounts.create()

console.log(newAccount.address.replace('0x','GNC'))
console.log(newAccount.privateKey)


