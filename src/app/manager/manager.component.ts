import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  managerFlag: boolean = false;
  password: number=0;
  managerPassword: number = 12345678;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  donator() {
    this.router.navigate(['donator'], { relativeTo: this.route });
  }
  enterManager() {
    this.managerFlag = true;
  }

  ruffle() {
    this.router.navigate(['ruffle'], { relativeTo: this.route })
  }
}
