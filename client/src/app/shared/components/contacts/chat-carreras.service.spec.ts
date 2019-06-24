import { TestBed, inject } from '@angular/core/testing';

import { ChatCarrerasService } from './chat-carreras.service';


describe('ChatCarrerasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatCarrerasService]
    });
  });

  it('should be created', inject([ChatCarrerasService], (service: ChatCarrerasService) => {
    expect(service).toBeTruthy();
  }));
});
