import { Component, OnInit } from '@angular/core';
import { FoodPlace } from '../services/food-place.type';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  foodPlaces: FoodPlace[] = [
    {
      id: 1,
      name: 'Каганат',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque repellendus, consectetur dolores accusamus incidunt illum magnam eos suscipit velit, harum tenetur, autem nam vitae rerum aut dolore deleniti! Maxime?',
      address: '3420 Geary Blvd',
      phoneNumber: '(415) 682-4197',
      addressArea: 'Laurel Heights',
      category: 'Fast-food',
      rating: 5
    },
    {
      id: 2,
      name: 'McDonalds',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque repellendus, consectetur dolores accusamus incidunt illum magnam eos suscipit velit, harum tenetur, autem nam vitae rerum aut dolore deleniti! Maxime?',
      address: '3420 Geary Blvd',
      phoneNumber: '(415) 682-4197',
      addressArea: 'Laurel Heights',
      category: 'Fast-food',
      rating: 3
    },
    {
      id: 3,
      name: 'Burger King',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque repellendus, consectetur dolores accusamus incidunt illum magnam eos suscipit velit, harum tenetur, autem nam vitae rerum aut dolore deleniti! Maxime?',
      address: '3420 Geary Blvd',
      phoneNumber: '(415) 682-4197',
      addressArea: 'Laurel Heights',
      category: 'Fast-food',
      rating: 1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
