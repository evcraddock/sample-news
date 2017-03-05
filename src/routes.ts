import { Routes } from '@angular/router';
import { NewsListComponent } from './app/news-list/news-list.component';
import { NewsDetailComponent } from './app/news-detail/news-detail.component';
import { NewsListResolver} from './app/news-list/news-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'news', component: NewsListComponent, resolve: { articles: NewsListResolver} },
    { path: ':category', component: NewsListComponent, resolve: { articles: NewsListResolver} },
    { path: ':category/tags/:tag', component: NewsListComponent, resolve: { articles: NewsListResolver} },
    { path: 'articles/:permalink', component: NewsDetailComponent },
    { path: '', redirectTo: '/news', pathMatch: 'full' }
];
