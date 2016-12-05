describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('Mahr.io - Learning Management System');
  });
});
