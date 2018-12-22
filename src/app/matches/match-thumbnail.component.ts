import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-match-thumbnail',
  templateUrl: './match-thumbnail.component.html'
})
export class MatchThumbnailComponent {
  @Input() match: any;
  @Output() goalScored = new EventEmitter<string>();

  handleHomeClick() {
    this.goalScored.emit('home');
  }

  handleAwayClick() {
    this.goalScored.emit('away');
  }
}
