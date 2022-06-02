import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/profile', icon: 'person-circle' },
    { title: 'Maps', url: '/maps', icon: 'map' },
    { title: 'Countries', url: '/countries', icon: 'earth' },
    { title: 'Options', url: '/options', icon: 'options' },
    { title: "FAQ's", url: '/faq', icon: 'help' },
    { title: 'Leave', url: '/leave', icon: 'exit'},
  ];
  
  constructor() {}
}
