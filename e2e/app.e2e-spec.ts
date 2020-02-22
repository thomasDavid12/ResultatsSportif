import { ResultatsSportifPage } from './app.po';

describe('resultats-sportif App', function() {
  let page: ResultatsSportifPage;

  beforeEach(() => {
    page = new ResultatsSportifPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
