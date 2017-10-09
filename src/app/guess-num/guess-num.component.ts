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

  checkNum() {

    this.noOfTries = this.noOfTries +1;

    this.difference = Math.abs(this.originalNo - this.guessedNo);
    

  }


  ngOnInit() {
    this.originalNo= Math.floor((Math.random()*100) +1);
    console.log(this.originalNo);
    this.noOfTries = 0;
    this.guessedNo = null;
    this.difference = 0;
  }

}
