import { TestBed, inject } from '@angular/core/testing';

import { ChatObtenerChatSalaService } from './chat-obtener-chat-sala.service';

describe('ChatObtenerChatSalaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatObtenerChatSalaService]
    });
  });

  it('should be created', inject([ChatObtenerChatSalaService], (service: ChatObtenerChatSalaService) => {
    expect(service).toBeTruthy();
  }));
});
