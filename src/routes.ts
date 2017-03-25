import { Routes } from '@angular/router';
import { ErrorsComponent } from './app/shared/errors.component';
import { NewsListComponent } from './app/news-list/news-list.component';
import { NewsDetailComponent } from './app/news-detail/news-detail.component';
import { ArticleResolver, ArticlesResolver, LinksResolver } from './app/shared/resolvers';

export const appRoutes: Routes = [
    { path: 'news', component: NewsListComponent, resolve: { links: LinksResolver, articles: ArticlesResolver } },
    { path: ':category', component: NewsListComponent, resolve: { articles: ArticlesResolver, links: LinksResolver } },
    { path: ':category/tags/:tag', component: NewsListComponent, resolve: { articles: ArticlesResolver, links: LinksResolver } },
    { path: 'articles/:category/:permalink', component: NewsDetailComponent, resolve: { article: ArticleResolver, links: LinksResolver } },
    { path: '', redirectTo: 'news', pathMatch: 'full' }
];
