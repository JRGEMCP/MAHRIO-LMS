describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('Mahr.io - Learning Management System');
  });

  it('should not be logged in', () => {
    expect(element(by.id('5-logout-header')).isPresent()).toEqual(false);
  });
});
