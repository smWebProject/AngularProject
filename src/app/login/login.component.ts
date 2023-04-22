import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router, public userSrv: UserService) { }
  frmUser: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    email: new FormControl("", Validators.email)
  })
  ngOnInit(): void {
  }
  saveForm() {
    console.log(this.frmUser.controls['name'].value);

    let n = this.frmUser.controls['name'].value;
    let p = this.frmUser.controls['phone'].value;
    let e = this.frmUser.controls['email'].value;
    this.userSrv.user.name = n;
    this.userSrv.user.phone = p;
    this.userSrv.user.email = e;

    this.router.navigate(['userGifts'], { relativeTo: this.route });

  }
}
