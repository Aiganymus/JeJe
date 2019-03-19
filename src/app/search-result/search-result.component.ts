import { Component, OnInit, Input } from '@angular/core';
import { FoodPlace } from '../services/food-place.type';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() placeInfo: FoodPlace;

  constructor() {}

  ngOnInit() {}

  counter(i: number) {
    return new Array(i);
  }
}
