import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getLoginButton(): Promise<unknown> {
    return element(by.buttonText('Se connecter'));
  }

  async submitLoginForm(username: string): Promise<unknown> {
    const loginForm = await element(by.css('app-login form'));
    await loginForm.element(by.id('login-username')).sendKeys(username);

    return loginForm.submit();
  }

  async getLoggedUsername(): Promise<unknown> {
    return element(by.css('app-login p')).getText();
  }
}
