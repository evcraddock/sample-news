import { ErrorService } from './error.service';

describe('ErrorService', () => {
    let service: ErrorService;

  beforeEach(() => {
      service = new ErrorService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
