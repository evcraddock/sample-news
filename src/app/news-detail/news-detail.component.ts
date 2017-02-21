import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {
  newsId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id'];
  }

}
