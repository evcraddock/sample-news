import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router} from '@angular/router';
// import { Response } from '@angular/http';

import { IArticle } from '../models/index';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  public articles: IArticle[] = [];
  public message = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadArticles();
  }

  hasMessage() {
    return this.message.length > 0;
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    let msg = 'Could not find any articles';

    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['articles']) {

          const articleData = data['articles'];
          // if (typeof(articleData) === 'string') {
          //   msg = articleData;
          //   // this.router.navigate(['/errors/']);
          // }

          if (articleData instanceof Array && articleData.length > 0) {
            this.articles = articleData;
            msg = '';
          }
        }
      });
    }

    this.message = msg;
  }
}
