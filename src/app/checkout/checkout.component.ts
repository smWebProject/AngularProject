import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gift } from '../models/Gift.model';
import { User } from '../models/User.model';
import { GiftsTableService } from '../services/giftsTable.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public giftSrv: GiftsTableService,private route: ActivatedRoute,public userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  save() {
    let giftArray = this.giftSrv.giftsArray.value;
    for (let j = 0; j < this.giftSrv.giftsForUser.length; j++) {
      for (let i = 0; i < giftArray.length; i++) {
        if (giftArray[i].code == this.giftSrv.giftsForUser[j].code) {

          console.log(this.userSrv.user.name + "user");
          console.log(giftArray[i].users);
          if (giftArray[i].users == null)
            giftArray[i].users = [];
          giftArray[i].users.push(this.userSrv.user)
          this.giftSrv.updateGift(giftArray[i]).subscribe((res: boolean) => {
            if (res)
              this.giftSrv.getGifts().subscribe((res: Gift[]) => this.giftSrv.saveList(res));
          });
          break;
        }
        console.log(giftArray[i].users + "array");
      }
    }
    this.giftSrv.numOfSaledGifts+=this.giftSrv.giftsForUser.length;
    alert("mabye you are the winner! wait to our phone!")
    this.router.navigate(['/home'], { relativeTo: this.route })

  }
}
