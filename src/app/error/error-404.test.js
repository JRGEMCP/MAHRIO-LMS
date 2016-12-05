import { TestBed } from '@angular/core/testing';
import { Error404 } from './error-404.component';

describe('Error404', () => {
  it('sample test', () => {
    TestBed.configureTestingModule({ declarations: [Error404] });

    const fixture = TestBed.createComponent(Error404);
    const app = fixture.componentInstance;

    expect(app.message).toEqual('404');
  });
});
