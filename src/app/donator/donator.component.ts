import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Donator } from '../models/Donator.model';
import { DonatorService } from '../services/donator.service';
import { GiftsTableService } from '../services/giftsTable.service';


@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {
  flag: boolean = false;
  codeValue: string = "";

  constructor(public donatorSrv: DonatorService, public giftStv: GiftsTableService) { }



  frmDonator: FormGroup = new FormGroup({
    code: new FormControl("", Validators.required),
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phone: new FormControl(0, [Validators.required, this.onlyDigits()]),
    adress: new FormControl("", Validators.required),
  })
  ngOnInit(): void {
    this.donatorSrv.getDonators().subscribe((res: Donator[]) => {
      this.donatorSrv.saveList(res);
    });
  }

  onlyDigits(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let tmp = control.value.toString();
      let forbidden: boolean = isNaN(tmp);
      return forbidden ? { onlyDigits: { value: control.value } } : null;
    };
  }

  addDonator() {
    this.codeValue = "";
    this.flag = true;
  }
  updateDonator(code: string) {
    this.codeValue = code;
    this.flag = true;
  }
  saveForm() {
    console.log(this.frmDonator.controls['name'].value);
    let c = this.frmDonator.controls['code'].value;
    let n = this.frmDonator.controls['name'].value;
    let d = this.frmDonator.controls['phone'].value;
    let p = this.frmDonator.controls['adress'].value;

    let newDonator = new Donator();
    newDonator.code = c;
    newDonator.name = n;
    newDonator.phone = d;
    newDonator.adress = p;
    newDonator.gifts = [];
    if (this.codeValue != "") {
      this.donatorSrv.updateDonator(newDonator).subscribe((res: boolean) => {
        alert(res);
        if (res)
          this.donatorSrv.getDonators().subscribe((res: Donator[]) => this.donatorSrv.saveList(res));
      });
    }
    else {
      this.donatorSrv.addDonator(newDonator).subscribe((res: boolean) => {
        alert(res);
        if (res)
          this.donatorSrv.getDonators().subscribe((res: Donator[]) => this.donatorSrv.saveList(res));
      });
      this.flag = false;
    }
  }
  delete(code: string) {

    this.donatorSrv.deleteDonator(code).subscribe((res: string) => {
      alert(res)
      this.donatorSrv.getDonators().subscribe((res: Donator[]) => this.donatorSrv.saveList(res));
    });
  }

}

