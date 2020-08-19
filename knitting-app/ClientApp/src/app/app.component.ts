import { Component } from '@angular/core';
import { MainService } from './main.service';
import { Pattern } from './models/pattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(public sharedService: MainService) {}

  onInit() {
  }
}
