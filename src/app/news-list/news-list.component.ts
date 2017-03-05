import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IArticle } from '../models/index';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  articles: IArticle[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.articles = data['articles'];
    });
  }
}
