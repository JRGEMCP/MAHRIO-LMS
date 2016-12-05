import { TestBed } from '@angular/core/testing';
import { Conversation } from './conversation.component';

describe('Conversations', () => {
  it('sample test', () => {
    TestBed.configureTestingModule({ declarations: [Conversation] });

    const fixture = TestBed.createComponent(Conversation);
    const app = fixture.componentInstance;

    expect(app.message).toEqual('Conversations');
  });
});
