import { Component, HostListener  } from '@angular/core';

import { SidenavService } from './service/sidenav.service';
import { onMainContentChange } from './animations/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [ onMainContentChange ]
})
export class AppComponent {
  title = 'beeoneTest';
  showFiller = true;
  scrWidth:any;
  sidemenuOpen: boolean = true;
  public onSideNavChange: boolean = false;
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;
    this.sidemenuOpen = window.innerWidth > 768 ? true : false
  }
  constructor(private _sidenavService: SidenavService){
    this._sidenavService.sideNavState$.subscribe( res => {
      this.onSideNavChange = res;
    })
    this.getScreenSize();
  }

  

  openNavbar(event: any) {
    console.log('clicked', event)
    this.sidemenuOpen = !this.sidemenuOpen;
  }

}
