import { Routes } from '@angular/router';
import { NewsListComponent } from './app/news-list/news-list.component';
import { NewsDetailComponent } from './app/news-detail/news-detail.component';

export const appRoutes: Routes = [
    { path: 'news', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: '', redirectTo: '/news', pathMatch: 'full' }
]