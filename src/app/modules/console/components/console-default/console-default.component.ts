import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
