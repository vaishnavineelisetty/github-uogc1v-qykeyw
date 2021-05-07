import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { SevicingService } from '../sevicing.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  menu: Menu[] = this.ser.getMenu();
  panelOpenState: boolean = false;

  ngOnInit(): void {}

  addToCart(item: Menu): void {
    this.ser.addToCart(item);
  }
}
