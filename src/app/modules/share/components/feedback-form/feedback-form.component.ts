import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  showMore1 = false;
  showMore2 = false;
  showMore3 = false;



  reviews: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.loadDummyReviews();
  }
  loadDummyReviews() {
    for (let i = 1; i <= 10; i++) {
      this.reviews.push({
        id: i,
        // imageUrl: 'https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png',
        userName: 'User name ' + i,
        starImageUrl: 'https://thumbs.dreamstime.com/b/five-star-rating-icon-vector-stars-flat-isolated-162380031.jpg',
        reviewText: `This is review number ${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.`,
        showMore: false
      });
    }
  }

  toggleMoreLess(id: number, event: MouseEvent) {
    event.preventDefault();
    this.reviews[id - 1].showMore = !this.reviews[id - 1].showMore;
  }



  stars: number[] = [1, 2, 3, 4, 5];
  selectedIndex: number = -1;
  ratingText: string = '';

  onStarClick(index: number): void {
    this.selectedIndex = index + 1;
    switch (this.selectedIndex) {
      case 1:
        this.ratingText = 'Bad';
        break;
      case 2:
        this.ratingText = 'Poor';
        break;
      case 3:
        this.ratingText = 'Average';
        break;
      case 4:
        this.ratingText = 'Very Good';
        break;
      case 5:
        this.ratingText = 'Excellent';
        break;
      default:
        this.ratingText = '';
    }
  }

}

