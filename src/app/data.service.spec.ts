import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it(
    'should get from typicode endpoint',
    inject(
      [ HttpTestingController, DataService],
      (httpMock: HttpTestingController, dataService: DataService) => {
        const mockUsers = [
          { name: 'Leanne Graham', email: 'Sincere@april.biz' },
          { name: 'Ervin Howell', email: 'Shanna@melissa.tv' }
        ];

        dataService.fetchData().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(dataService._URL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.method).toBe('GET')
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );
});