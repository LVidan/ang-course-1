import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor() { }

  firstName: string;
  lastName: string;
  isMarried: boolean;
  age: number;

  ngOnInit(): void {
    this.firstName = "Philip";
    this.lastName = "Demo";
    this.isMarried = true;
    this.age = 38;
  }
}
