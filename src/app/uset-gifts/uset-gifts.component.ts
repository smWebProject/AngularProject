import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gift } from '../models/Gift.model';
import { User } from '../models/User.model';
import { GiftsTableService } from '../services/giftsTable.service';

@Component({
  selector: 'app-uset-gifts',
  templateUrl: './uset-gifts.component.html',
  styleUrls: ['./uset-gifts.component.css']
})
export class UsetGiftsComponent implements OnInit {
  payment: number = 0;
  feeFlag: boolean = false;
  deleteGift: Gift[] = [];

  constructor( public giftSrv: GiftsTableService) { }

  ngOnInit(): void {
    this.giftSrv.giftsForUser=[];
    this.giftSrv.getGifts().subscribe((res: Gift[]) => {
      this.giftSrv.saveList(res);
    })

  }
  choose(gift: Gift) {
    this.giftSrv.giftsForUser.push(gift);
    this.payment += gift.price;

    console.log(this.giftSrv.giftsForUser);

  }
  
  delete(gift: Gift) {
    console.log(this.giftSrv.giftsForUser + "11111");

    for (let j = 0; j < this.giftSrv.giftsForUser.length; j++) {
      if (this.giftSrv.giftsForUser[j].code == gift.code) {

        this.deleteGift = this.giftSrv.giftsForUser.filter((x) => x.code != gift.code )
        this.giftSrv.giftsForUser=this.deleteGift;
        console.log(this.giftSrv.giftsForUser );
        console.log(this.deleteGift );
        this.payment -= gift.price;
        
      }
    }
  }


}
