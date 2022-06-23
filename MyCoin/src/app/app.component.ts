import { Component } from '@angular/core';
import { BlockchainService } from './servives/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyCoin';

  public publicKey: any;

  constructor(private blockchainService: BlockchainService) {
    this.publicKey = blockchainService.walletKeys[0].publicKey;
  }

}
