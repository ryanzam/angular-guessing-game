import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-num',
  templateUrl: './guess-num.component.html',
  styleUrls: ['./guess-num.component.css']
})
export class GuessNumComponent implements OnInit {

  difference: number;
  noOfTries: number;
  guessedNo: number;
  originalNo: number;

  constructor() { }



  ngOnInit() {
    this.originalNo= Math.floor((Math.random()*100) +1);
    console.log(this.originalNo);
    this.noOfTries = 0;
    this.guessedNo = null;
    this.difference = null;
  }

}
