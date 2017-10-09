import { AngularGuessNumberPage } from './app.po';

describe('angular-guess-number App', () => {
  let page: AngularGuessNumberPage;

  beforeEach(() => {
    page = new AngularGuessNumberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
