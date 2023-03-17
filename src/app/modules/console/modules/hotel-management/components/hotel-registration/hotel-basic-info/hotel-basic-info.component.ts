import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel-basic-info',
  templateUrl: './hotel-basic-info.component.html',
  styleUrls: ['./hotel-basic-info.component.scss']
})

export class HotelBasicInfoComponent implements OnInit {
  ratings: Rating[] = [
    {value: 'star-0', viewValue: '5 Star'},
    {value: 'star-1', viewValue: '# Star'},
    {value: 'star-2', viewValue: '# Star'},
  ];

  phoneForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phone: "+919876543210"
    });
  }

  ngOnInit(): void {
  }

}



