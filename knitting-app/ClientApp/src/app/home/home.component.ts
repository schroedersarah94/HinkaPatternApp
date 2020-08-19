import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Pattern } from '../models/pattern';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public router: Router, public sharedService: MainService) {

  }

  setActivePattern(pattern: Pattern) {
    this.sharedService.activePattern = pattern;
  }
}
