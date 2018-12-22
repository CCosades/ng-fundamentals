import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-match-list></app-match-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
