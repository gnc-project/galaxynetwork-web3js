# galaxynetwork-web3js

```txt
this is web3jsDemo for gnc
```
### how to download

```npm
    npm install web3
```
### Examples are in the Demo folder


### Notice
* 1.Replace the old chain address prefix 'GNC' with '0x'
* 2.Keep the RPC/API same with Ethereum v1.10.8
* 3.Block Number starts from 0
* 4.Block confirmations 32

### Shown to users:
```js
    var Web3 = require('web3');

    var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

    var newAccount=web3.eth.accounts.create()
    //0x6bacec0a630a53fdbae5f1f10bf87fe2b422eec1
    console.log(newAccount.address)
```

### User input:
```js
    //user input GNC address
    var oldGNC_Address ='0x6cBe9DF6DF54281D363e7a5e1790dc66212438C7'

    //call rpc ...
    web3.eth.getBalance(addr).then(
        console.log
    )
 
```
