import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewsListComponent } from './news-list.component';

export class MockActivatedRoute {
    snapshot: ActivatedRouteSnapshot;
    toString(): string {
        return '';
    };
}

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  const mockroute: MockActivatedRoute = new MockActivatedRoute();
  mockroute.snapshot = new ActivatedRouteSnapshot();
  mockroute.snapshot.params = Observable.of({'url': 'fakeurl'});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListComponent ],
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
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
