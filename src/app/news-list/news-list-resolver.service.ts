import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { ArticleService } from '../service/article-service';

@Injectable()
export class NewsListResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {
    const params = new URLSearchParams();
    if (route.params['category']) {
      params.set('categories', route.params['category']);
    }

    if (route.params['tag']) {
      params.set('tags', route.params['tag']);
    }
        return this.articleService.searchArticles(params);
    }
}
