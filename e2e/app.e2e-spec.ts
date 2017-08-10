import { IsItAnIPage } from './app.po';

describe('is-it-an-i App', () => {
  let page: IsItAnIPage;

  beforeEach(() => {
    page = new IsItAnIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
