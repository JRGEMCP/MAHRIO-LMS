import { TestBed } from '@angular/core/testing';
import { User } from './user.component';

describe('User', () => {
  it('sample test', () => {
    TestBed.configureTestingModule({ declarations: [User] });

    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;

    expect(app.message).toEqual('Users');
  });
});
