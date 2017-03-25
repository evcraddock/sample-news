import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewsDetailComponent } from './news-detail.component';
import { MarkdownToHtmlPipe } from '../shared/pipes/markdown-to-html/markdown-to-html.pipe';

export class MockActivatedRoute {
    snapshot: ActivatedRouteSnapshot;
    toString(): string {
        return '';
    };
}

@Pipe({name: 'MarkdownToHtml'})
export class MockPipeMarked implements PipeTransform {
    transform(markdown: string, options?: MarkedOptions): string {
        return '';
    }
}

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  const mockroute: MockActivatedRoute = new MockActivatedRoute();
  mockroute.snapshot = new ActivatedRouteSnapshot();
  mockroute.snapshot.params = Observable.of({'url': 'fakeid'});

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        NewsDetailComponent,
        MockPipeMarked
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockroute }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
