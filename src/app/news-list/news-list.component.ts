import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router} from '@angular/router';
// import { Response } from '@angular/http';

import { IArticle, ILink } from '../models/index';

@Component({
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.less']
})
export class NewsListComponent implements OnInit {
  public articles: IArticle[] = [];
  public links: ILink[] = [];
  public messages: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  hasMessages() {
    return this.messages.length > 0;
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  hasLinks() {
    return this.links.length > 0;
  }

  loadData() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        this.loadArticles(data['articles']);
        this.loadLinks(data['links']);
      });
    }
  }

  loadLinks(linkData: ILink[]) {
    if (linkData instanceof Array && linkData.length > 0) {
      this.links = linkData;
    }
  }

  loadArticles(articleData: IArticle[]) {
    let msg = 'Could not find any articles';
    if (articleData instanceof Array && articleData.length > 0) {
      this.articles = articleData;
      msg = '';
    }

    if (msg.length > 0) {
      this.messages.push(msg);
    }
  }
}
