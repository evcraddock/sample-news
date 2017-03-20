import { Routes } from '@angular/router';
import { ErrorsComponent } from './app/shared/errors.component';
import { NewsListComponent } from './app/news-list/news-list.component';
import { NewsDetailComponent } from './app/news-detail/news-detail.component';
import { NewsListResolver} from './app/news-list/news-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'news', component: NewsListComponent, resolve: { articles: NewsListResolver } },
    { path: 'errors', component: ErrorsComponent },
    { path: ':category', component: NewsListComponent, resolve: { articles: NewsListResolver } },
    { path: ':category/tags/:tag', component: NewsListComponent, resolve: { articles: NewsListResolver } },
    { path: 'articles/:permalink', component: NewsDetailComponent },
    { path: '', redirectTo: 'errors', pathMatch: 'full' }
];
