import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IArticle } from '../models/index';
import { ArticleService } from '../service/article-service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {
  article: IArticle = <IArticle>{};
  newsId: string;
  
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id'];  
    this.loadArticle();
  }

  loadArticle() {
    this.articleService.getArticle(this.newsId).subscribe(news_article => {
      if (news_article) {
        this.article = news_article;
      }
    });
  }

}
