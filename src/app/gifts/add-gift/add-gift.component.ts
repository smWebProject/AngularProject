import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Donator } from 'src/app/models/Donator.model';
import { Gift } from 'src/app/models/Gift.model';
import { DonatorService } from 'src/app/services/donator.service';
import { GiftsTableService } from 'src/app/services/giftsTable.service';

@Component({
  selector: 'add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {
  constructor(public giftSrv: GiftsTableService,private router: Router, private route: ActivatedRoute, public donatorSrv: DonatorService) { }

  codeValue: string = "";
  nameValue: string = "";
  donatorValue: string = "";
  priceValue: number = 10;

  frmGift: FormGroup = new FormGroup({
    code: new FormControl(this.codeValue, Validators.required),
    name: new FormControl(this.nameValue, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    donator: new FormControl(this.donatorValue, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    price: new FormControl(this.priceValue, Validators.required),
  })
  flag: boolean = false;
  ngOnInit(): void {
    this.getCode()
    this.donatorSrv.getDonators().subscribe((res: Donator[]) => {
      this.donatorSrv.saveList(res);

    });
    console.log(this.codeValue);
  }


  getCode() {
    this.route.params.subscribe((p: Params) => {
      this.codeValue = p['code'];
    })
  }
  checkParams(curCode: string, curName: string) {


    let i = 0;
    this.giftSrv.giftsArray.getValue().forEach(g => {
      if (g.code == curCode) {
        alert("this code already exists!")
        this.flag = true;
      }
      if (g.name == curName) {
        alert("this name already exists!")
        this.flag = true;
      }

      console.log(g);
      i++;
    });
    return this.flag;
  }

  saveForm() {

    console.log(this.frmGift.controls['name'].value);
    let c = this.frmGift.controls['code'].value;
    let n = this.frmGift.controls['name'].value;
    let d = this.frmGift.controls['donator'].value;
    let p = this.frmGift.controls['price'].value;

    let newGift = new Gift();
    newGift.code = c;
    newGift.name = n;
    newGift.donator = d;
    newGift.price = p;
    newGift.users = [];
    console.log(this.codeValue);

    if (this.codeValue != undefined) {
      this.giftSrv.updateGift(newGift).subscribe((res: boolean) => {
        if (res)
          this.giftSrv.getGifts().subscribe((res: Gift[]) => this.giftSrv.saveList(res));
      });
    }
    else {
      let res = this.checkParams(c, n);
      if (!res)
        this.giftSrv.addGift(newGift).subscribe((res: boolean) => {
          if (res)
            this.giftSrv.getGifts().subscribe((res: Gift[]) => this.giftSrv.saveList(res));
        });
    }
    
    this.donatorSrv.donatorsArray.getValue().forEach(d => {
      if(d.name==newGift.donator){
        d.gifts.push(newGift)
        this.donatorSrv.updateDonator(d).subscribe((res: boolean) => {
          if (res)
            this.donatorSrv.getDonators().subscribe((res: Donator[]) => this.donatorSrv.saveList(res));
        });
      }
    });
    this.router.navigate(['/home/admin/gifts'], { relativeTo: this.route })

  }
}
