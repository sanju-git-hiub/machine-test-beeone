import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.sass']
})
export class CountCardComponent implements OnInit {

  constructor() { 
    
  }
  @Input() count: any;

  ngOnInit(): void {
  }

}
