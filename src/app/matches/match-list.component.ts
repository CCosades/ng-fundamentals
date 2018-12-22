import {Component} from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html'
})
export class MatchListComponent {
  matches = [{
    id: 1,
    homePlayer: {
      name: 'Hubert E.',
      team: 'Spurs',
      teamLogo: '/assets/images/teams/spurs.png'
    },
    awayPlayer: {
      name: 'Jakub L.',
      team: 'City',
      teamLogo: '/assets/images/teams/city.png'
    },
    result: '2:2',
    date: new Date(2018, 12, 18)
  },
    {
      id: 2,
      homePlayer: {
        name: 'Sebastian S.',
        team: 'Man Utd',
        teamLogo: '/assets/images/teams/manutd.png'
      },
      awayPlayer: {
        name: 'Oleksandr L.',
        team: 'Barca',
        teamLogo: '/assets/images/teams/barca.png'
      },
      result: '7:1',
      date: new Date(2018, 12, 18)
    }];

  handleGoalScored(team: string) {
    console.log(team + ' scored!');
  }
}
