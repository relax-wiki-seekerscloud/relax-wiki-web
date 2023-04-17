import {Component, OnInit, Type} from '@angular/core';
import {
  HotelRoomCountComponent
} from "../../../console/modules/hotel-management/components/hotel-registration/hotel-room-count/hotel-room-count.component";
import {
  HotelBasicInfoComponent
} from "../../../console/modules/hotel-management/components/hotel-registration/hotel-basic-info/hotel-basic-info.component";
import {
  HotelRoomDescriptionComponent
} from "../../../console/modules/hotel-management/components/hotel-registration/hotel-room-description/hotel-room-description.component";

interface Step {
  label: string;
  component: Type<any>;
}

const STEPS: Step[] = [
  { label: 'Step 1', component: HotelBasicInfoComponent },
  { label: 'Step 2', component: HotelRoomCountComponent},
  { label: 'Step 3', component: HotelRoomDescriptionComponent },
];

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  // steps: any;
  steps: Step[] = [];
  constructor() { }

  ngOnInit(): void {
    this.steps = STEPS;
  }

}
