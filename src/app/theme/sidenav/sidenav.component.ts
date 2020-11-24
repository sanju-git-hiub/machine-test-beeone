import { Component, OnInit, HostListener } from '@angular/core';
import { Screens } from 'src/app/data/pages';
import { SidenavService } from 'src/app/service/sidenav.service';
import { onSideNavChange, animateText } from '../../animations/animation'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
  animations: [onSideNavChange, animateText]
})
export class SidenavComponent implements OnInit {

  constructor(private _sidenavService: SidenavService) {
    this.getScreenSize();
   }

  public links = Screens;
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  ngOnInit(): void {
  } 

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.linkText = window.innerWidth > 768 ? false : true
  }
 
  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
}

