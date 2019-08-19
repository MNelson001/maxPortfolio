import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.sidenav.close();
  }

}
