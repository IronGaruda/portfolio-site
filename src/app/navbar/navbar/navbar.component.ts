import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Input() reveal = false;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToId(id: string): void {
    console.log(`scroll to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  } 
}
