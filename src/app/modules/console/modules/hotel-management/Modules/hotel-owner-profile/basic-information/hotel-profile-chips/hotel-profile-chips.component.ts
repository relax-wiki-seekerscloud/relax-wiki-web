import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatChipList } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

export interface Chip {
  value: string;
  selected?: boolean;
}

@Component({
  selector: 'app-hotel-profile-chips',
  templateUrl: './hotel-profile-chips.component.html',
  styleUrls: ['./hotel-profile-chips.component.scss']
})
export class HotelProfileChipsComponent implements AfterViewInit {

  @Input() chips: Chip[] = [];
  @Input() color: string = 'primary';
  @Output() chipsChange = new EventEmitter<Chip[]>();
  newChipValue: string = '';
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  @ViewChild(MatChipList) chipList!: MatChipList;

  constructor() { }

  ngAfterViewInit() {
    // Initialize the chipList property here
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const chip: Chip = { value };
      this.chips.push(chip);
      this.newChipValue = '';
      this.chipsChange.emit(this.chips);
    }
    event.chipInput!.clear();
  }


  remove(chip: Chip): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
      this.chipsChange.emit(this.chips);
    }
  }
}
