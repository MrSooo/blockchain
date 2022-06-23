import { Injectable } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { BlockChain } from 'src/blockchain/blockchain'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new BlockChain();
  public walletKeys: any[] = [];

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  getAllTransaction() {
    return this.blockchainInstance.getAllTransactions();
  }

  getBlockNumber(transaction) {
    return this.blockchainInstance.getBlockNumberOfTransaction(transaction);
  }

  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');

    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}
