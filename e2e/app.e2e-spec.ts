import { SportsTvPage } from './app.po';

describe('sports-tv App', function() {
  let page: SportsTvPage;

  beforeEach(() => {
    page = new SportsTvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
