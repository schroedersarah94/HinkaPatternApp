import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Pattern } from '../models/pattern';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {


  constructor(public sharedService: MainService) { }

  ngOnInit() {
  }

}
