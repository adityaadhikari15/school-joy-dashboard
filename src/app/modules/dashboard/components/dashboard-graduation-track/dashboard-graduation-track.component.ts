import { ChartOptions, ChartType } from 'chart.js';
import { Badges, GraduationTrackCompletionChartData, GraduationTrackCompletionData } from '../../../../../mock-data/mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graduation-track',
  templateUrl: './dashboard-graduation-track.component.html',
  styleUrls: ['./dashboard-graduation-track.component.scss'],
  standalone: false
})
export class DashboardGraduationTrackComponent implements OnInit {
 graduationTrackData = GraduationTrackCompletionData;
 totalStudents = 50;
  doughnutChartData = {
    labels: GraduationTrackCompletionChartData.labels,
    datasets: [{
      data: GraduationTrackCompletionChartData.values,
      backgroundColor: GraduationTrackCompletionChartData.colors,
      cutout: '70%',
      borderWidth: 0
    }]
  };

  doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  constructor() { }

  ngOnInit() { }

}
