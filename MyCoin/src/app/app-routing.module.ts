import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionTableComponent } from './components/all-transaction-table/all-transaction-table.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';

const routes: Routes = [
  {
    path: '', component: BlockchainViewerComponent
  },
  {
    path: 'new/transaction', component: CreateTransactionComponent
  },
  {
    path: 'new/transaction/pending', component: PendingTransactionsComponent
  },
  {
    path: 'new/transaction/all', component: AllTransactionTableComponent
  },
  { path: 'wallet/:address', component: WalletBalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }