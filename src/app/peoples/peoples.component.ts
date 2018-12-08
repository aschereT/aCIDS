import { Component, OnInit } from '@angular/core';
import { People } from '../people';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  people: People = {
    id: 1,
    name: 'Firstname Lastname',
    email: 'dev@null.com',
    phone: '6041234567',
    address: '1600 Infinite Loop'
  };
  constructor() { }

  ngOnInit() {
  }

}
