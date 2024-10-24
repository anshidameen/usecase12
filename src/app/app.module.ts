import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewInvestmentComponent } from './components/new-investment/new-investment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssetComponent } from './components/asset/asset.component';
import { MarketComponent } from './components/market/market.component';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewInvestmentComponent,
    AssetComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  