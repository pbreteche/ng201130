import { AppPage } from './app.po';

describe('user authentication', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a login form', async () => {
    await page.navigateTo();
    expect(await page.getLoginButton()).toBeTruthy();
  });

  it('should allow user to log in', async () => {
    await page.navigateTo();
    await page.submitLoginForm('John Doe');

    expect(await page.getLoggedUsername()).toContain('John Doe');
  });
});
