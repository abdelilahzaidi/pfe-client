import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  // private subscription: Subscription | undefined;
  // contentVisible = true;

  // constructor(private menuService: MenuService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // isSidebarVisible: boolean = true;

  // toggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  //   console.log('Hello')
  // }

}
