import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/servives/blockchain.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() public block: any;

  @Input() public selectedBlock;

  private blocksInChain;

  constructor(private blockchainService: BlockchainService) {
    this.blocksInChain = blockchainService.blockchainInstance.chain;
  }

  ngOnInit(): void {
  }

  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

}
