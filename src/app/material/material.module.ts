import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const MaterialMods = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({
  imports: [
    MaterialMods
  ],
  exports: [MaterialMods]
})
export class MaterialModule { }
