# galaxynetwork-web3js

```txt
this is web3jsDemo for gnc
```
### haw to download

```npm
    npm install web3
```
### Examples are in the Demo folder


### Notice
* 1.The address showed to users shall keep the prefix with 'GNC';
* 2.Before calling the Galaxy Network RPC interface, please replace the transfer address prefix 'GNC' entered by users with '0x'

### Show to users:
```js
    var Web3 = require('web3');

    var web3 = new Web3(new Web3.providers.HttpProvider("http://chain-node.galaxynetwork.vip"));

    var newAccount=web3.eth.accounts.create()
 
    console.log(newAccount.address.replace('0x','GNC'))
    console.log(newAccount.privateKey)
```

### User input:
```js
    var oldGNC_Address ='GNC6cBe9DF6DF54281D363e7a5e1790dc66212438C7'

    var newGNC_Address=oldGNC_Address.replace('GNC','0x')
 
```
