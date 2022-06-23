import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/servives/blockchain.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Transaction } from 'src/blockchain/blockchain'
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockchainService: BlockchainService) {
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.newTx = new Transaction();
  }

}
