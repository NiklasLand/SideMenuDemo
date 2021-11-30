import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'CelebrityWatch';
  
  
  display : boolean = false;
  menuItems: MenuItem[] = [];

  ngOnInit(): void {

    this.menuItems = [
      {label: 'Dashboard', icon: 'pi pi-home', routerLink:'/dashboard'},
      {label: 'Latest news', icon: 'pi pi-globe', routerLink:'/news'},
      
    ]
  }
}
