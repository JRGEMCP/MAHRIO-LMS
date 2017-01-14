describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('Mahr.io - Learning Management System');
  });

  it('should not be logged in', () => {
    const logoutHeader = element(by.id('5-logout-header'));
    console.log(logoutHeader.getId());
    expect(logoutHeader.isDisplayed()).toBe(false);
  });
});
