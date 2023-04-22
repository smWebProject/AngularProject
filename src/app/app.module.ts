import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftsComponent } from './gifts/gifts.component';
import { AddGiftComponent } from './gifts/add-gift/add-gift.component';
import { GiftsTableService } from './services/giftsTable.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@progress/kendo-angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenueComponent } from './menue/menue.component';
import { AppRoutingModule } from './app-routing.module';
import { DonatorComponent } from './donator/donator.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { UsetGiftsComponent } from './uset-gifts/uset-gifts.component';
import { RaffleComponent } from './raffle/raffle.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';




@NgModule({
  declarations: [
    AppComponent,
    GiftsComponent,
    AddGiftComponent,
    HomeComponent,
    MenueComponent,
    DonatorComponent,
    UsetGiftsComponent,
    RaffleComponent,
    CheckoutComponent,
    LoginComponent,
    ManagerComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GridModule,
 
    
  ],
  providers: [GiftsTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
