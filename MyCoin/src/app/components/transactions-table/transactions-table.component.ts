import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/servives/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  @Input() public transactions = [];

  constructor(public blockchainService: BlockchainService) {
  }

  ngOnInit(): void {
  }

}
