import { Component, OnInit } from '@angular/core';
import { Review } from '../services/review.type';

@Component({
  selector: 'app-best-review',
  templateUrl: './best-review.component.html',
  styleUrls: ['./best-review.component.css']
})
export class BestReviewComponent implements OnInit {
  bestReview: Review = {
    id: 1,
    date: '12/21/2019',
    text: 'Не были в данном ресторане довольно долгое время, и этот раз очень приятно удивил. Все блюда восхитительно вкусные! Салат из древесных грибов, очень хорошая порция, немного острый, но вкусно.Понравилась атмосфера места, получил впечатление, что попал в Японию, куда-то в маленькую забегаловку в центре Токио...',
    authorName: 'Данияр Дж.',
    placeName: 'Рамен 77'
  }

  constructor() { }

  ngOnInit() {
  }

}
