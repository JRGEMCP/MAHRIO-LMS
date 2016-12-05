import { TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard.component';

describe('Dashboard', () => {
  it('sample test', () => {
    TestBed.configureTestingModule({ declarations: [Dashboard] });

    expect('Dashboard').toEqual('Dashboard');
  });
});
