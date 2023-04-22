import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Gift } from '../models/Gift.model';
import { GiftsTableService } from '../services/giftsTable.service';

@Component({
  selector: 'gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  gifts: Gift[] = [];
  flag: boolean = false;
  deleteFlag: boolean = false;
  mycode : FormControl = new FormControl('', Validators.required)
  constructor(public giftSrv: GiftsTableService) { }

  ngOnInit(): void {
    this.giftSrv.getGifts().subscribe((res: Gift[]) => {
      this.giftSrv.saveList(res);
    });
  }
  addGift = () => {
    this.flag = true;
    
  }
  delete(code: string) {
    console.log(this.mycode.value);
    
    this.giftSrv.deleteGift(code).subscribe((res: string) => {
      alert(res)
      this.giftSrv.getGifts().subscribe((res: Gift[]) => this.giftSrv.saveList(res));
    });
  }

}



