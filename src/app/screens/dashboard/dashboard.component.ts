import { Component, OnInit } from '@angular/core';
import { CountData } from 'src/app/data/count';
import { StaticImages } from 'src/app/data/image';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  counts = CountData;
  ReferFrnd = StaticImages.refer_frnd;
  UserCard = StaticImages.card;
  ViewMore = StaticImages.viewmore;
  public UserPlan = {
    name: "Prime Plus",
    trAc: 266.7,
    miningBal: 266.7,
    miningPend: 266.7,
    total: 266.7
  }
  constructor() { }

  ngOnInit(): void {
  }

}
