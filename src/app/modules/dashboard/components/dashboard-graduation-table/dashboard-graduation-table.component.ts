import { Component, OnInit } from '@angular/core';
import { Badges } from '../../../../../mock-data/mock-data';

@Component({
  selector: 'app-dashboard-graduation-table',
  templateUrl: './dashboard-graduation-table.component.html',
  styleUrls: ['./dashboard-graduation-table.component.scss'],
  standalone: false
})
export class DashboardGraduationTableComponent implements OnInit {
searchTerm = '';
 badges = Badges;
  constructor() { }

  ngOnInit() { }

  get filteredBadges() {
    return this.badges.filter(badge =>
      badge.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
