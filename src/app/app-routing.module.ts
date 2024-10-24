import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewInvestmentComponent } from './components/new-investment/new-investment.component';
import { AssetComponent } from './components/asset/asset.component';
import { MarketComponent } from './components/market/market.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add',component:NewInvestmentComponent},
  {path:'asset',component:AssetComponent},
  {path:'market',component:MarketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
