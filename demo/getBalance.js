
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

// The new GNC chain address prefix is '0x', so the old chain address prefix passed in must replace 'GNC' with '0x', 
// but the user display is still '0x'.

var addr ='0x7d4ed9084A364424d1087d26C4Ef092EAfB0b395'

web3.eth.getBalance(addr).then(
    console.log
)
