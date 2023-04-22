import { Component, OnInit } from '@angular/core';
import { Winner } from '../models/Winner.model';
import { GiftsTableService } from '../services/giftsTable.service';

@Component({
  selector: 'raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css']
})
export class RaffleComponent implements OnInit {
  winners: Winner[]= [];
  ruffleFlag:boolean=false;
  constructor(public giftSrv: GiftsTableService) { }

  ngOnInit(): void {

  }
ruffle(){
  this.ruffleFlag=true;
  let giftArray=this.giftSrv.giftsArray.value;
  for (let i = 0; i < giftArray.length; i++) {
    let giftLength = giftArray[i].users.length;
    let winNumber = Math.floor(Math.random() * giftLength);
    console.log(winNumber);
    let winner=new Winner();
    winner.gift=giftArray[i].name;
    winner.winner=giftArray[i].users[winNumber].name
    this.winners.push(winner);
    console.log(this.winners);
    
  }
  
}
}
