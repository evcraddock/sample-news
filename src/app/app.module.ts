import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MarkdownToHtmlPipe } from './shared/markdown-to-html.pipe';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list/news-listitem.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from '../routes';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { ArticleService } from './service/article-service';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsListItemComponent,
    NavComponent,
    NewsDetailComponent,
    MarkdownToHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MarkdownToHtmlPipe
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
