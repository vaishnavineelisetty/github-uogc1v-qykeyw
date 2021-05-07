import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { SevicingService } from '../sevicing.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.less']
})
export class MyCartComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  menu: Menu[] = this.ser.getCartItems();
  panelOpenState: boolean = false;

  ngOnInit(): void {}
}
