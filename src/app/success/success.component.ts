import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  gaPrice:any;
   bal:any;
   message1:any;
  message2:any;
   name:any;
  constructor() { }

  ngOnInit() {
      this.gaPrice= localStorage.getItem("gameprice");
      this.name=localStorage.getItem("gameName");
     this.bal=600-this.gaPrice;
     this.message2=` Thank You for Playing ${this.name}!
                Your balance is Rs. ${this.bal}`;
     this.message1=`Thank You for using our Online Gaming Site!
             Insufficient balance to play ${this.name}
            Please Top-Up again!!...`;
   return;
     }

}

