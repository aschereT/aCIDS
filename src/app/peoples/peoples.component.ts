import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PEOPLES} from '../mock-people';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples = PEOPLES;
  constructor() { }

  ngOnInit() {
  }

  selectedPeople: People;
  onSelect(people: People): void {
    this.selectedPeople = people;
  }

}
