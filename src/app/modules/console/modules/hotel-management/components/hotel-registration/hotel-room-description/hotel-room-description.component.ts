import { Component, OnInit } from '@angular/core';

interface Room {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-room-description',
  templateUrl: './hotel-room-description.component.html',
  styleUrls: ['./hotel-room-description.component.scss']
})
export class HotelRoomDescriptionComponent implements OnInit {
  rooms: Room[] = [
    {value: 'single', viewValue: 'single'},
    {value: 'double', viewValue: 'double'},
    {value: 'twin', viewValue: 'twin'},
    {value: 'triple', viewValue: 'triple'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
