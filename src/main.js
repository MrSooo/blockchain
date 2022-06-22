const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('ae5c68c0e5b24f0b6ccbbe14b219bda2fee404945c37483195593e475710647d');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key', 10);
tx1.signTransaction(myKey);


myCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Tu is ', myCoin.getBalanceOfAddress(myWalletAddress));

myCoin.chain[1].transactions[0].amout = 1;

console.log('Is chain valid? ', myCoin.isChainValid());