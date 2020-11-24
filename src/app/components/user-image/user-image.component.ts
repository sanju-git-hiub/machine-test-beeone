import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.sass']
})
export class UserImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() usimage: any;
}
