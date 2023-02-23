import { Component, OnInit } from '@angular/core';
import {Time} from "@angular/common";

@Component({
  selector: 'app-search-restaurants',
  templateUrl: './search-restaurants.component.html',
  styleUrls: ['./search-restaurants.component.scss']
})
export class SearchRestaurantsComponent implements OnInit {

  restLocation: string = '';
  restDate: Date = new Date();
  restTime: String = "00:00";
  restPeople: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  searchRestaurants() {
    if (this.restPeople < 1) {
      alert("Number of people cannot be less than 1");
      return;
    }


    console.log(`Searching for restaurants in ${this.restLocation}...`);
    console.log(`Restaurant date: ${this.restDate}`);
    console.log(`Restaurant time: ${this.restTime}`);
    console.log(`Number of restaurant people: ${this.restPeople}`);

    // Perform the actual search and filtering of restaurants here, using the values from the input fields
  }

}
