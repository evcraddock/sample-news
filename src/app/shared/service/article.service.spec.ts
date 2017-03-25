import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Http, Response, URLSearchParams, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ArticleService, ErrorService } from './index';

describe('ArticleService', () => {
    let mockHttp;
    let mockRouter;
    let service: ArticleService;
    let mockErrorService: ErrorService;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    mockRouter = jasmine.createSpyObj('route', ['stuff']);
    mockErrorService = new ErrorService();
    service = new ArticleService(mockHttp, mockRouter, mockErrorService);
  });

  describe('getArticles', () => {

        it('should call the rest service get links endpoint', () => {
            mockHttp.get.and.returnValue(Observable.of(false));
            service.getArticles();

            const expectedendpoint = 'http://localhost:9000/articles';
            const expectedParams = Object({ search: undefined });

            expect(mockHttp.get).toHaveBeenCalledWith(expectedendpoint, expectedParams);
        });

        // it ('should return an array of links with one item', () => {
        //     const mockResponse: Response = new Response(new ResponseOptions({
        //         body: testbatch,
        //         status: 200
        //     }));

        //     mockHttp.get.and.returnValue(Observable.of(mockResponse));

        //     service.getBatch('fakeid').subscribe(batch => {
        //         expect(batch.id).toBe(testbatch.id);
        //         expect(batch.status).toBe(testbatch.status);
        //     });
        // });
    });
});
