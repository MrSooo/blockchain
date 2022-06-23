import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/servives/blockchain.service';

@Component({
  selector: 'app-all-transaction-table',
  templateUrl: './all-transaction-table.component.html',
  styleUrls: ['./all-transaction-table.component.scss']
})
export class AllTransactionTableComponent implements OnInit {

  public transactions: any = [];

  constructor(public blockchainService: BlockchainService) {
    this.transactions = this.blockchainService.getAllTransaction();
    console.log(this.transactions);
  }

  ngOnInit(): void {
  }

  getTransactionNumber(tx) {
    return this.blockchainService.getBlockNumber(tx);
  }
}
