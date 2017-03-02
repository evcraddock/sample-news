import { Component, OnInit } from '@angular/core';
import { IArticle } from '../models/index';
import { ArticleService } from '../service/article-service';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  articles: IArticle[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(articles => {
      if (articles) {
        this.articles = articles;
      }
    });
  }
}
