import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  searchControl= new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
