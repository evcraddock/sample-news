import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';

import { IArticle } from '../models/index';
import { ArticleService } from '../service/article-service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {
  article: IArticle = <IArticle>{};
  permUrl: string;
  
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    //this.newsId = this.route.snapshot.params['id']; 
    this.permUrl = this.route.snapshot.params['permalink']; 
    this.loadArticle();
  }

  loadArticle() {
    let params = new URLSearchParams();
    params.set('url', this.permUrl);

    this.articleService.searchArticles(params).subscribe(articles => {
      if (articles) {
        this.article = articles[0];
      }
    });
  }

}
