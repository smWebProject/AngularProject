import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftsTableService } from '../services/giftsTable.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public userSrv: UserService, public giftSrv: GiftsTableService) { }
  
  // password: FormControl = new FormControl(0, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
  
  ngOnInit(): void {
  }
  
}
