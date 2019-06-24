import { TestBed, inject } from '@angular/core/testing';

import { ChatConsultarSalasService } from './chat-consultar-salas.service';

describe('ChatConsultarSalasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatConsultarSalasService]
    });
  });

  it('should be created', inject([ChatConsultarSalasService], (service: ChatConsultarSalasService) => {
    expect(service).toBeTruthy();
  }));
});
