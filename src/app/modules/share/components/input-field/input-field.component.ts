import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() name:string="";
  @Input() placeholder:string="";
  @Input() required=false;
  constructor() { }

  ngOnInit(): void {
  }

}
