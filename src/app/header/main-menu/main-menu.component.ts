import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuItems: string[] = ['Home', 'Products', 'About', 'Contact']
}
