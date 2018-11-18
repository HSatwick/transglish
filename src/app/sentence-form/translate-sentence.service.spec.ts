import { TestBed } from '@angular/core/testing';

import { TranslateSentenceService } from './translate-sentence.service';

describe('TranslateSentenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateSentenceService = TestBed.get(TranslateSentenceService);
    expect(service).toBeTruthy();
  });
});
