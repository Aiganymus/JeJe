import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars-count',
  templateUrl: './stars-count.component.html',
  styleUrls: ['./stars-count.component.css']
})
export class StarsCountComponent implements OnInit {
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

  counter() {
    return new Array(this.count);
  }

}
