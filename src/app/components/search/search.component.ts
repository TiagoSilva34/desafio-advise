import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onHandleName: EventEmitter<any> = new EventEmitter()

  title: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}
