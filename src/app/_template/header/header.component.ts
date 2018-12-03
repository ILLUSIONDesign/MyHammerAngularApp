import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {'class': 'container'}
})
export class HeaderComponent implements OnInit {

  @Input() public headerTitle;

  constructor() { }

  ngOnInit() {
  }

}
