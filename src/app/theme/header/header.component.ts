import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { StaticImages } from 'src/app/data/image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public dashboard = StaticImages.dashboard;
  public notifiIcon = StaticImages.bell;

  @Output() open = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.open.emit(true);
  }
}
