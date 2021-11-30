import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {ToggleButtonModule} from 'primeng/togglebutton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'SidenavDemo';
  
  
  display : boolean = false;
  checked: boolean = false;
  menuItems: MenuItem[] = [];

  ngOnInit(): void {

    this.menuItems = [
      {label: 'Dashboard', icon: 'pi pi-home', routerLink:'/dashboard'},
      {label: 'Latest news', icon: 'pi pi-globe', routerLink:'/news'},
      
    ]
  }

  setDisplay(bool : boolean) {
    this.display = bool;
  }
  
}
