import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DonatorComponent } from "./donator/donator.component";
import { AddGiftComponent } from "./gifts/add-gift/add-gift.component";
import { GiftsComponent } from "./gifts/gifts.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ManagerComponent } from "./manager/manager.component";
import { MenueComponent } from "./menue/menue.component";
import { RaffleComponent } from "./raffle/raffle.component";
import { UsetGiftsComponent } from "./uset-gifts/uset-gifts.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'menue', component: MenueComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'admin', component: ManagerComponent, children: [
          { path: 'gifts', component: GiftsComponent },
          { path: 'donator', component: DonatorComponent },
          { path: 'ruffle', component: RaffleComponent },
          { path: 'donator/updategift/:code', component: AddGiftComponent },
          { path: 'gifts/updategift/:code', component: AddGiftComponent }
        ]
      },
      {
        path: 'login/userGifts', component: UsetGiftsComponent, children: [
          { path: 'checkout', component: CheckoutComponent }
        ]
      },


    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
